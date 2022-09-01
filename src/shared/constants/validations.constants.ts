import { EValidationTypes } from "@Shared/types/validation.types"

export const defaultValidationError: { [K in EValidationTypes]: string } = {
  [EValidationTypes.REQUIRED]: 'This field must contain a value.',
  [EValidationTypes.ONLY_LETTERS]: 'Entry must only contain letters.',
  [EValidationTypes.ONLY_NUMBERS]: 'Entry must only contain numbers',
  [EValidationTypes.EMAIL_FORMAT]: 'Please enter a valid email address',
  [EValidationTypes.PASSWORD_FORMAT]:
    'Password must contain one(1) lower case letter, one(1) number, and be at least eight(8) characters long.',
  [EValidationTypes.PHONE_NUMBER_FORMAT]: 'Entry is not in the correct format.',
  [EValidationTypes.MATCH_REGEXP]: 'Entry did not pass the regular expression.',
  [EValidationTypes.NO_SPECIAL_CHARACTERS]: 'Special characters not allowed.',
  [EValidationTypes.UNKNOWN_ERROR]: 'Unknown Error.',
  [EValidationTypes.ENUM]: 'Entry must be an enum.',
  [EValidationTypes.MIN_CHARACTERS]:
    'Entry must have at lest {{ASSERTION}} character.',
  [EValidationTypes.MAX_CHARACTERS]:
    'Entry exceeds character limit of {{ASSERTION}}.'
};

export const commonPatterns = {
  onlyLetters: '^\\D+$',
  onlyNumbers: '^-?\\d*\\.{0,1}\\d+$',
  noSpecialCharacters: '[^A-Za-z0-9 ]+',
  decimalFormat: '^[0-9]+.[0-9]{2}$',
  validPhoneNumberFormat: '^\\+(?:[0-9] ?){6,14}[0-9]$',
  validEmailFormat:
    '^([a-zA-Z0-9-!#$%&*+-/=?^_`{|}~\\.])+@(([a-zA-Z0-9-])+\\.)+([a-zA-Z0-9]{2,4})+$',
  validPasswordFormat: '^(?=.{8,})(?=.*[a-z,A-Z])(?=.*\\d).*$'
};
