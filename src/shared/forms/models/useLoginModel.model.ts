import { InputDataModel } from "@Shared/types/forms/inputs.types"
import { IBaseFormModel } from "@Shared/types/forms/model.types"
import { EValidationTypes } from "@Shared/types/validation.types"

export interface ILoginFormInputs {
  email: InputDataModel<string>;
  password: InputDataModel<string>;
}

export function useLoginModel(): IBaseFormModel<ILoginFormInputs> {
  const email: ILoginFormInputs['email'] = {
    name: 'email',
    value: '',
    validations: [
      { type: EValidationTypes.REQUIRED },
      { type: EValidationTypes.EMAIL_FORMAT }
    ]
  };

  const password: ILoginFormInputs['password'] = {
    name: 'password',
    value: '',
    validations: [
      { type: EValidationTypes.REQUIRED },
      { type: EValidationTypes.MIN_CHARACTERS, assertion: { minLength: 8 } },
      { type: EValidationTypes.PASSWORD_FORMAT },
    ]
  };

  const getInputs = () => {
    return { email: email, password: password };
  };

  return { getInputs };
}