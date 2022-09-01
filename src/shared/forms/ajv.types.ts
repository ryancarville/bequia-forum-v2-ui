export enum EKeywords {
  // For arrays
  maxItems = 'maxItems',
  minItems = 'minItems',

  // For strings
  maxLength = 'maxLength',
  minLength = 'minLength',

  // Number comparisons <=, >=, ==....
  maximum = 'maximum',
  minimum = 'minimum',

  // If matches a format, date, email...
  format = 'format',

  // Regex
  pattern = 'pattern',

  // Self explanatory
  required = 'required',

  // For objects
  maxProperties = 'maxProperties', // Shouldn't show this error
  minProperties = 'minProperties', // Shouldn't show this error

  // Checks of repeating values in array
  uniqueItems = 'uniqueItems', // Shouldn't show this error

  // Maximum allowed number of additional items in array
  additionalItems = 'additionalItems', // Shouldn't show this error

  // Maximum allowed number of extra properties in object
  additionalProperties = 'additionalProperties', // Shouldn't show this error

  // Used for dependant validation, won't pass unless other specified properties are entered
  dependencies = 'dependencies', // Shouldn't show this error

  // Multiple, as in the number is valid if its dividable by the multiple provided,
  // eg. multiple: 5; 5, 10, 15 are valid, 16 for example isn't
  multipleOf = 'multipleOf', // Shouldn't show this error

  // Each property should comply to rules in schema (an invalid property name)
  propertyNames = 'propertyNames', // Shouldn't show this error

  // Each pattern in array in schema tests value to true
  patternRequired = 'patternRequired', // THIS ONE IS A PROPOSAL, WE SHOULDN'T USE IT

  // Checks if value is of provided type
  type = 'type', // Shouldn't show this error

  // Deep equal comparison of objects
  // const = 'const', // Shouldn't show this error

  // Is value equal to provided enum
  enum = 'enum' // Shouldn't show this error

  // $ref = '$ref', Not sure

  // Passes only if one of validations passes in the schema
  // oneOf = 'oneOf' // Shouldn't show this error
}

declare namespace ajv {
  type ErrorObject = {
    keyword: EKeywords;
    dataPath: string;
    schemaPath: string;
    params: ErrorParameters;
    // Added to validation errors of propertyNames keyword schema
    propertyName?: string;
    // Excluded if messages set to false.
    message?: string;
    // These are added with the `verbose` option.
    schema?: any;
    parentSchema?: object;
    data?: any;
  };

  type ErrorParameters =
    | RefParams
    | LimitParams
    | AdditionalPropertiesParams
    | DependenciesParams
    | FormatParams
    | ComparisonParams
    | MultipleOfParams
    | PatternParams
    | RequiredParams
    | TypeParams
    | UniqueItemsParams
    | CustomParams
    | PatternRequiredParams
    | PropertyNamesParams
    | IfParams
    | SwitchParams
    | NoParams
    | EnumParams;

  interface RefParams {
    ref: string;
  }

  interface LimitParams {
    limit: number;
  }

  interface AdditionalPropertiesParams {
    additionalProperty: string;
  }

  interface DependenciesParams {
    property: string;
    missingProperty: string;
    depsCount: number;
    deps: string;
  }

  interface FormatParams {
    format: string;
  }

  interface ComparisonParams {
    comparison: string;
    limit: number | string;
    exclusive: boolean;
  }

  interface MultipleOfParams {
    multipleOf: number;
  }

  interface PatternParams {
    pattern: string;
  }

  interface RequiredParams {
    missingProperty: string;
  }

  interface TypeParams {
    type: string;
  }

  interface UniqueItemsParams {
    i: number;
    j: number;
  }

  interface CustomParams {
    keyword: string;
  }

  interface PatternRequiredParams {
    missingPattern: string;
  }

  interface PropertyNamesParams {
    propertyName: string;
  }

  interface IfParams {
    failingKeyword: string;
  }

  interface SwitchParams {
    caseIndex: number;
  }

  interface NoParams {}

  interface EnumParams {
    allowedValues: Array<any>;
  }

  type KeywordToParam = {
    [EKeywords.required]: ajv.RequiredParams;
    [EKeywords.pattern]: ajv.PatternParams;
    [EKeywords.enum]: ajv.EnumParams;
    [EKeywords.maximum]: ajv.ComparisonParams;
    [EKeywords.minimum]: ajv.ComparisonParams;
    [EKeywords.format]: ajv.FormatParams;
    [EKeywords.minLength]: ajv.LimitParams;
    [EKeywords.maxLength]: ajv.LimitParams;
    [EKeywords.additionalItems]: ajv.LimitParams;
    [EKeywords.additionalProperties]: ajv.AdditionalPropertiesParams;
    [EKeywords.dependencies]: ajv.DependenciesParams;
    [EKeywords.maxProperties]: ajv.LimitParams;
    [EKeywords.minProperties]: ajv.LimitParams;
    [EKeywords.maxItems]: ajv.LimitParams;
    [EKeywords.minItems]: ajv.LimitParams;
    [EKeywords.multipleOf]: ajv.MultipleOfParams;
    [EKeywords.patternRequired]: ajv.PatternRequiredParams;
    [EKeywords.propertyNames]: ajv.PropertyNamesParams;
    [EKeywords.type]: ajv.TypeParams;
    [EKeywords.uniqueItems]: ajv.UniqueItemsParams;
  };
}

export interface IValidationErrorResponse {
  statusCode: string;
  message: string;
  errors: ajv.ErrorObject[];
}

export default ajv;
