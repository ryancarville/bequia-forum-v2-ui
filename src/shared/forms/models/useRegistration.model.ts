import { IBaseFormModel } from "@Shared/types/forms/model.types"
import { InputDataModel } from "../../types/forms/inputs.types"
import { EValidationTypes } from "../../types/validation.types"
import { FileData } from "../file.types"

export type RegistrationFormModelInputs = {
  givenName: InputDataModel<string>;
  familyName: InputDataModel<string>;
  dob: InputDataModel<string>;
  username: InputDataModel<string>;
  email: InputDataModel<string>;
  password: InputDataModel<string>;
  phoneNumber: InputDataModel<string>;
  tosAccepted: InputDataModel<boolean>;
  profilePhoto: InputDataModel<FileData | null>
};


function useRegistrationModel(): IBaseFormModel<RegistrationFormModelInputs> {
  const givenName: RegistrationFormModelInputs['givenName'] = {
    name: 'givenName',
    value: '',
    validations: [
      { type: EValidationTypes.REQUIRED },
      { type: EValidationTypes.ONLY_LETTERS },
      { type: EValidationTypes.MIN_CHARACTERS, assertion: { minLength: 2 } }
    ]
  };

  const familyName: RegistrationFormModelInputs['familyName'] = {
    name: 'familyName',
    value: '',
    validations: [
      { type: EValidationTypes.REQUIRED },
      { type: EValidationTypes.ONLY_LETTERS },
      { type: EValidationTypes.MIN_CHARACTERS, assertion: { minLength: 2 } }
    ]
  };

  const dob: RegistrationFormModelInputs['dob'] = {
    name: 'dob',
    value: '',
    validations: [{ type: EValidationTypes.REQUIRED }]
  };

  const username: RegistrationFormModelInputs['username'] = {
    name: 'username',
    value: '',
    validations: [{ type: EValidationTypes.REQUIRED }]
  };

  const email: RegistrationFormModelInputs['email'] = {
    name: 'email',
    value: '',
    validations: [
      { type: EValidationTypes.REQUIRED },
      { type: EValidationTypes.EMAIL_FORMAT }
    ]
  };

  const password: RegistrationFormModelInputs['password'] = {
    name: 'password',
    value: '',
    validations: [
      { type: EValidationTypes.REQUIRED },
      { type: EValidationTypes.MIN_CHARACTERS, assertion: { minLength: 8 } },
      { type: EValidationTypes.PASSWORD_FORMAT }
    ]
  };

  const phoneNumber: RegistrationFormModelInputs['phoneNumber'] = {
    name: 'phoneNumber',
    value: '',
    validations: [{ type: EValidationTypes.ONLY_NUMBERS }]
  };

  const profilePhoto: RegistrationFormModelInputs['profilePhoto'] = {
    name: 'profilePhoto',
    value: null,
    isFile: true
    // validations:[
    //   {
    //     type: EValidationTypes.FILE_NAME_LENGTH,
    //     assertion: { maxCharacters: 40 },
    //     manualValidation: true
    //   },
    //   {
    //     type: EValidationTypes.FILE_TYPE,
    //     assertion: {
    //       allowedTypes: [...commonImageMIMEtypes]
    //     },
    //     manualValidation: true
    //   },
    //   {
    //     type: EValidationTypes.FILE_EXTENSION,
    //     assertion: {
    //       extensions: commonImageExtensions
    //     },
    //     manualValidation: true
    //   },
    //   {
    //     type: EValidationTypes.MAX_FILE_SIZE,
    //     assertion: {
    //       MB: 10
    //     },
    //     manualValidation: true
    //   }
    // ])
  };

  const tosAccepted: RegistrationFormModelInputs['tosAccepted'] = {
    name: 'tosAccepted',
    value: false,
    validations: [{ type: EValidationTypes.REQUIRED }]
  };

  const getInputs = (): RegistrationFormModelInputs => {
    return {
      givenName,
      familyName,
      dob,
      username,
      email,
      password,
      phoneNumber,
      tosAccepted,
      profilePhoto
    };
  };

  return { getInputs };
}

export default useRegistrationModel;