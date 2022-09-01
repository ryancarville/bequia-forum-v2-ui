import { commonPatterns, defaultValidationError } from "@Shared/constants/validations.constants"
import { IValidation, ValidationError } from "@Shared/types/forms/validations.types"
import { EValidationTypes } from "@Shared/types/validation.types"

export interface IValidationResponse {
  isValid?: boolean;
  error?: ValidationError;
  value?: any;
  validate?: (name: string, value: any, validation: IValidation) => IValidationResponse;
}

/**
 * @name Validation of a value and type
 * @description will run a passed validation type against the passed value
 * @returns validation response object
 */
export default function useValidation(): IValidationResponse {

  const hasValue = (value: any): boolean => {
    console.log(value)
    if (typeof value === 'number' && !isNaN(value)) return true;
    if (Array.isArray(value)) return value.length > 0;
    return !!value;
  }

  const onlyLetters = (value: any): boolean => {
    const isValid: boolean = new RegExp(commonPatterns.onlyLetters).test(
      value
    );
    return isValid;
  }

  const onlyNumbers = (value: any): boolean => {
    const isValid: boolean = new RegExp(commonPatterns.onlyNumbers).test(value);
    return isValid;
  };

  const emailFormat = (value: any): boolean => {
    const isValid: boolean = new RegExp(commonPatterns.validEmailFormat).test(
      value
    );
    return isValid;
  };

  const passwordFormat = (value: any): boolean => {
    const isValid: boolean = new RegExp(
      commonPatterns.validPasswordFormat
    ).test(value);
    return isValid;
  };

  const minLength = (value: any, assertion: any): boolean => {
    return value.length >= assertion.minLength;
  }

  const maxLength = (value: any, assertion: any): boolean => {
    return value.length <= assertion.maxLength;
  };

  // only return function
  // will return a validation response object
  const validate = (name: string, value: any, validation: IValidation): IValidationResponse => {
    const { assertion } = validation;
    let errMsg: string = defaultValidationError[validation.type];

    // update the error message if there is a dynamic assertion value
    if (!!assertion) {
      const [assertionKey] = Object.keys(assertion);
      //@ts-ignore
      errMsg = errMsg.replace(`{{ASSERTION}}`, assertion[assertionKey]);
    }
    // set the error attribute if not exist
    if (!validation.error) {
      validation.error = {
        name: name,
        message: errMsg,
        values: assertion
      };
    }

    // data structure for the response object
    let valRes: IValidationResponse = {
      isValid: false,
      error: validation.error,
      value: value
    };

    // set the isValid boolean from the validation
    switch (validation.type) {
      case EValidationTypes.REQUIRED: {
        valRes.isValid = hasValue(value);
        return valRes;
      }
      case EValidationTypes.ONLY_LETTERS: {
        valRes.isValid = onlyLetters(value);
        return valRes;
      }
      case EValidationTypes.ONLY_NUMBERS: {
        valRes.isValid = onlyNumbers(value);
        return valRes;
      }
      case EValidationTypes.EMAIL_FORMAT: {
        valRes.isValid = emailFormat(value);
        return valRes;
      }
      case EValidationTypes.PASSWORD_FORMAT: {
        valRes.isValid = passwordFormat(value);
        return valRes
      }
      case EValidationTypes.MAX_CHARACTERS: {
        valRes.isValid = maxLength(value, assertion);
        return valRes;
      }
      case EValidationTypes.MIN_CHARACTERS: {
        valRes.isValid = minLength(value, assertion);
        return valRes;
      }
      default: {
        return valRes;
      }
    }
  };

  return { validate };
}
