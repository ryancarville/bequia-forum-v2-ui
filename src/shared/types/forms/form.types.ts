import { InputDataModel, InputGroupModel } from "./inputs.types"

// If property is a group of InputDataModel then it should be InputGroupModel
// otherwise the property should be single InputDataModel
export type FormModelInputs<T> = {
  [K in keyof T]: T[K] extends InputGroupModel<any>
    ? InputGroupModel<any>
    : InputDataModel<any>;
};

/*
Since a class has to statically know all property types we separate the
fields from the abstract class to be implemented separately
 */
export type FormModelFields<T> = {
  [K in keyof T]: T[K];
};
