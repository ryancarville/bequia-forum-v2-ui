import { EValidationTypes } from "../validation.types"

export type ValidationError<T = object> = {
  name: string;
  message: string; // The message string, dynamic variables are marked with curly brackets
  values?: T; // Values used for dynamic variables for i18n
};

interface IBaseValidationField<T extends EValidationTypes> {
  error?: ValidationError;
  type: T;
  manualValidation?: boolean; // If set to true, form validator won't trigger this validation and it has to be triggered manually
}

interface IRequired extends IBaseValidationField<EValidationTypes.REQUIRED> {
  assertion?: object;
}

interface IOnlyLetters extends IBaseValidationField<EValidationTypes.ONLY_LETTERS> {
  assertion?: object;
}

interface IOnlyNumbers
  extends IBaseValidationField<EValidationTypes.ONLY_NUMBERS> {
  assertion?: object;
}

interface IPassword extends IBaseValidationField<EValidationTypes.PASSWORD_FORMAT> {
  assertion?: object;
}

interface IEmail extends IBaseValidationField<EValidationTypes.EMAIL_FORMAT> {
  assertion?: object;
}

interface IMinCharacters extends IBaseValidationField<EValidationTypes.MIN_CHARACTERS> {
  assertion?: object;
}

interface IMaxCharacters extends IBaseValidationField<EValidationTypes.MAX_CHARACTERS> {
  assertion?: object;
}

export type IValidation =
  | IRequired
  | IOnlyLetters
  | IOnlyNumbers
  | IEmail
  | IPassword
  | IMaxCharacters
  | IMinCharacters
  // | IMaxValue
  // | IMinValue
  // | IDecimalFormat
  // | IPhoneNumberFormat
  // | INoSpecialCharacters
  // | IValidDateFormat
  // | IFileExtension
  // | IMaxFileSize
  // | IFileType
  // | IExcelModel
  // | IMatchRegExp
  // | IMaxFilesAllowed
  // | IFileNameLength
  // | IMaxItems
  // | IMinItems
  // | IEnum
  // | IUnknown
  // | IFormat
  // | IUriFormat
  // | IUrlFormat
  // | IFacebookUriFormat
  // | ITwitterUriFormat
  // | IInstagramUriFormat
  // | ILinkedinUriFormat
  // | IYouTubeLinkUriFormat
  // | IImageRequired
  // | IHasSameValue;