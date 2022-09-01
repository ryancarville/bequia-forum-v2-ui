import { InputDataModel } from '@Shared/types/forms/inputs.types'
import { objValues } from '@Shared/utils/common.util'
import { useEffect, useRef, useState } from 'react';
import useFormValidation from './useFormValidation'
import { IValidationResponse } from './useValidation'

// Generic
interface IUseFormState<T, R> {
  inputsState: T;
  setInput: ({}: InputDataModel<any>) => void;
  getInputsState: () => T;
  mapInputs: () => R;
  validateInputs: (inputs: T) => IValidationResponse;
}
/**1
 *
 * @param inputs : formModelInputs as an object
 * @returns {
 *  inputState: Inputs of the form
 *  setInput: set the value of an input
 *  getInputsState: get the current state
 *  validateInputs: hook to check inputs state
 *  mapInputs: will map the input values to a key/value object
 * }
 */
function useForm<T,R>(inputs: T): IUseFormState<T,R> {
  const [inputsState, setInputsState] = useState<T>(inputs);
  const inputsStateRef = useRef(inputsState);
  const { validateFormInputs } = useFormValidation<T>();

  // update state ref on state change
  useEffect(() => {
    if (inputsState !== inputsStateRef.current)
      inputsStateRef.current = inputsState;
  }, [inputsState]);

  /** ======= Methods ======= */

  const setInput = ({ name, value }: InputDataModel<any>) => {
    //@ts-ignore
    const inputToUpdate = inputsState[name];
    const updatedState = {
      ...inputsState,
      [name]: {
        ...inputToUpdate,
        value: value
      }
    };
    setInputsState(updatedState);
  };

  // uses the ref to ensure concurrency
  const getInputsState = () => inputsStateRef.current;

  // validate a list of inputs
  const validateInputs = (inputs: T): IValidationResponse => validateFormInputs(inputs);

  // map the value to the request object. Only maps inputs that have a value
  const mapInputs = (): R => {
    let mappedInputs: R = {} as R;
    objValues(inputsState as Object).map((input) => {
      if (input.value) {
        mappedInputs = {
          ...mappedInputs,
          [input.name]: input.value
        };
      }
    });
    return mappedInputs;
  };

  return {
    inputsState,
    setInput,
    getInputsState,
    mapInputs,
    validateInputs,
  };
}

export default useForm;