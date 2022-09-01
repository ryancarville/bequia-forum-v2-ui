import { InputDataModel } from "@Shared/types/forms/inputs.types"
import { EValidationTypes } from "@Shared/types/validation.types"
import { objValues } from "@Shared/utils/common.util"
import useValidation, { IValidationResponse } from "./useValidation"

interface IUseFormValidationResponse<T> {
  validateFormInput: (input: InputDataModel<any>) => IValidationResponse;
  validateFormInputs: (inputs: T) => IValidationResponse;
}

/**
 * @name Form Validation Hook
 * @describe provides two methods with take a object of inputs and validates them
 * @returns IUseFormValidationResponse{}
 *
 */

function useFormValidation<T>(): IUseFormValidationResponse<T> {
  const { validate } = useValidation();

  // validate a single input
  // will ony validation inputs that are required or have validations and a current value
  const validateFormInput = (input: InputDataModel<any>): IValidationResponse => {
    const { name, value, validations } = input;
    let valResponse: IValidationResponse = { isValid: true };

    if (!!validations && !!validate) {
      const isRequiredValue: boolean = !!(
        validations.find((v) => v.type === EValidationTypes.REQUIRED) && !!!value
      );

      if (isRequiredValue || !!value) {
        for (const validation of validations) {
          console.log(validation)
          valResponse = validate(name, value, validation);
          if (valResponse.isValid) continue;
          return valResponse;
        }
      }
    }
    return valResponse;
  };


  // validation a collection of inputs
  const validateFormInputs = (inputs: T): IValidationResponse => {
    console.log(inputs)
    const extractedInputs = objValues(inputs as Object);
    for (const input of extractedInputs) {
      // If no input for given key found or no validations provided continue the for loop
      if (!input.validations) {
        continue;
      }

      const val: IValidationResponse = validateFormInput(input);
      if (val.isValid) continue;
      return val;
    }
    return { isValid: true };
  };

  return { validateFormInput, validateFormInputs };
}

export default useFormValidation;