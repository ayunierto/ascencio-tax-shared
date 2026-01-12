export const ValidationMessages = {
  ARRAY: 'validationArray',
  BOOLEAN: 'validationBoolean', // true or false
  DATE: 'validationIsoDate', // YYYY-MM-DD
  EMAIL: 'validationEmail', // user@example.com
  INVALID_ENUM: 'validationEnum', // invalid enum value
  INVALID_FORMAT: 'validationInvalidFormat',
  ISO_DATETIME: 'validationIsoDatetime', // YYYY-MM-DDTHH:mm:ss.sssZ
  MAX_LENGTH: 'validationMaxLength',
  MAX_VALUE: 'validationMaxValue',
  MIN_ITEMS: 'validationMinItems',
  MIN_LENGTH: 'validationMinLength',
  MIN_VALUE: 'validationMinValue',
  MUST_MATCH: 'validationMustMatch',
  NON_NEGATIVE: 'validationNonNegative',
  NUMBER: 'validationNumber',
  POSITIVE: 'validationPositive',
  REQUIRED: 'validationRequired',
  STRING: 'validationString',
  TIME: 'validationTime', // HH:mm format
  URL: 'validationUrl',
  UUID: 'validationUuid',
} as const;

export type ValidationMessageKey =
  (typeof ValidationMessages)[keyof typeof ValidationMessages];
