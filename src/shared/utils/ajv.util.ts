import { commonPatterns } from "@Shared/constants/validations.constants"
import ajv, { EKeywords } from "../forms/ajv.types"
import { IValidation } from "../types/forms/validations.types"
import { EValidationTypes } from "../types/validation.types"

export function ajvKeywordToEValidation<K extends EKeywords>(
  keyword: K,
  params: ajv.KeywordToParam[K]
): EValidationTypes {
  switch (keyword) {
    // case EKeywords.maxItems: {
    //   return EValidationTypes.MAX_ITEMS;
    // }
    // case EKeywords.minItems: {
    //   return EValidationTypes.MIN_ITEMS;
    // }
    // case EKeywords.maxLength: {
    //   return EValidationTypes.MAX_CHARACTERS;
    // }
    // case EKeywords.minLength: {
    //   return EValidationTypes.MIN_CHARACTERS;
    // }
    case EKeywords.format: {
      const format = (params as ajv.KeywordToParam[EKeywords.format]).format;

      if (format === 'email') {
        return EValidationTypes.EMAIL_FORMAT;
      }

      // if (format === 'uri') {
      //   return EValidationTypes.IS_URI;
      // }

      // if (format === 'url') {
      //   return EValidationTypes.IS_URL;
      // }

      break;
    }
    // case EKeywords.maximum: {
    //   return EValidationTypes.MAX_VALUE;
    // }
    // case EKeywords.minimum: {
    //   return EValidationTypes.MIN_VALUE;
    // }
    case EKeywords.pattern: {
      let pattern = (params as ajv.KeywordToParam[EKeywords.pattern]).pattern;

      if (pattern.substr(-3) === '|^$') {
        // Since on back we
        pattern = pattern.slice(0, -3);
      }

      switch (pattern) {
        case commonPatterns.onlyLetters:
          return EValidationTypes.ONLY_LETTERS;
        case commonPatterns.onlyNumbers:
          return EValidationTypes.ONLY_NUMBERS;
        case commonPatterns.noSpecialCharacters:
          return EValidationTypes.NO_SPECIAL_CHARACTERS;
        case commonPatterns.validPhoneNumberFormat:
          return EValidationTypes.PHONE_NUMBER_FORMAT;
        case commonPatterns.validEmailFormat:
          return EValidationTypes.EMAIL_FORMAT;
        // case commonPatterns.facebook:
        //   return EValidationTypes.facebook_URI;
        // case commonPatterns.twitter:
        //   return EValidationTypes.twitter_URI;
        // case commonPatterns.instagram:
        //   return EValidationTypes.instagram_URI;
        // case commonPatterns.linkedin:
        //   return EValidationTypes.linkedin_URI;
        // case commonPatterns.youTubeLink:
        //   return EValidationTypes.youTubeLink_URI;
        // case commonPatterns.url:
        //   return EValidationTypes.IS_URL;
        default:
          return EValidationTypes.MATCH_REGEXP;
      }
    }
    case EKeywords.enum: {
      return EValidationTypes.ENUM;
    }
    case EKeywords.required: {
      return EValidationTypes.REQUIRED;
    }
  }

  return EValidationTypes.UNKNOWN_ERROR;
}

export function ajvErrorParamToAssertion<K extends EKeywords>(
  keyword: K,
  params: ajv.KeywordToParam[K]
): IValidation['assertion'] {
  switch (keyword) {
    case EKeywords.maxItems: {
      const limitParams = params as ajv.LimitParams;

      return {
        maxItems: limitParams.limit
      };
    }
    case EKeywords.minItems: {
      const limitParams = params as ajv.LimitParams;

      return {
        minItems: limitParams.limit
      };
    }
    case EKeywords.maxLength: {
      const limitParams = params as ajv.LimitParams;

      return {
        maxCharacters: limitParams.limit
      };
    }
    case EKeywords.minLength: {
      const limitParams = params as ajv.LimitParams;

      return {
        minCharacters: limitParams.limit
      };
    }
    case EKeywords.format: {
      const formatParams = params as ajv.FormatParams;

      return {
        format: formatParams.format
      };
    }
    case EKeywords.maximum: {
      const comparisonParams = params as ajv.ComparisonParams;

      return {
        maxValue: Number(comparisonParams.limit)
      };
    }
    case EKeywords.minimum: {
      const comparisonParams = params as ajv.ComparisonParams;

      return {
        minValue: Number(comparisonParams.limit)
      };
    }
    case EKeywords.pattern: {
      const patternParams = params as ajv.PatternParams;

      return {
        regExp: patternParams.pattern
      };
    }
    case EKeywords.enum: {
      const enumParams = params as ajv.EnumParams;

      return {
        enums: enumParams.allowedValues.join(', ')
      };
    }
  }
}
