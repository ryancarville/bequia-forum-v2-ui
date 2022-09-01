import { IValidation, ValidationError } from './validations.types';

export type InputChange<V> = {
  name: string;
  value: V;
};

export type InputValidationCallback = {
  name: string;
  error: ValidationError;
};

// Every input should implement this as their input change to be consistent
export type onInputChange<V> = (callbackValue: InputChange<V>) => void;
export type onGroupInputChange<V> = (
  groupName?: string,
  index?: number
) => onInputChange<V>;
export type onInputError = (callbackValue: InputValidationCallback) => void;

export type InputDataModel<V> = {
  name: string;
  value: V;
  error?: ValidationError;
  validations?: IValidation[];
  readonly isFile?: boolean;
  readonly isGroup?: false;
  isDraftRequired?: boolean;
};

// Group of properties which are of type InputDataModel
export type ModelOfInputs = {
  [inputName: string]: InputDataModel<any>;
};

export type InputGroupModel<T extends ModelOfInputs> = {
  name: string;
  values: T[];
  error?: ValidationError;
  readonly inputsScheme: T;
  readonly isGroup: true;
};

// Gives you the type of value field from InputDataModel
type InputValueType<T> =
  // If Generic<T> is InputDataModel, extract its Value type (string, number...)
  T extends InputDataModel<infer Value> ? Value :
    // If Generic<T> is InputGroupModel, extract its ModelOfInputs
    T extends InputGroupModel<infer AsModelOfInputs> ?
      // Since we now have ModelOfInputs, recursively call InputValueType to extract value type of each input from the model
      {[K in keyof AsModelOfInputs]: InputValueType<AsModelOfInputs[K]>}[] : T;


/*
Gives you type with keys of the generic T but values of value type in InputDataModel
For example we have:
interface ExampleInterface {
  exampleField: InputDataModel<string>
}
and we use
FormModelInputTypes<ExampleInterface> it will return type which looks like this:
{
  exampleField: string
}
 */
export type FormModelInputTypes<T> = {
  [K in keyof T]: InputValueType<T[K]>
};
