export const CommonMessages = {
  // Validation messages
  VALIDATION_REQUIRED: 'validationRequired',
  VALIDATION_INVALID_FORMAT: 'validationInvalidFormat',
  VALIDATION_MIN_LENGTH: 'validationMinLength',
  VALIDATION_MAX_LENGTH: 'validationMaxLength',
  VALIDATION_EMAIL: 'validationEmail',
  VALIDATION_NUMBER: 'validationNumber',
  VALIDATION_MIN_VALUE: 'validationMinValue',
  VALIDATION_MAX_VALUE: 'validationMaxValue',
  VALIDATION_MUST_MATCH: 'validationMustMatch',
  VALIDATION_URL: 'validationUrl',
  VALIDATION_UUID: 'validationUuid',
  VALIDATION_ISO_DATETIME: 'validationIsoDatetime', // YYYY-MM-DDTHH:mm:ss.sssZ
  VALIDATION_DATE: 'validationIsoDate', // YYYY-MM-DD
  VALIDATION_BOOLEAN: 'validationBoolean', // true or false
  VALIDATION_TIME: 'validationTime', // HH:mm format
  VALIDATION_STRING: 'validationString',
  VALIDATION_ARRAY: 'validationArray',
  VALIDATION_INVALID_ENUM: 'validationEnum',
  VALIDATION_POSITIVE: 'validationPositive',
  VALIDATION_NON_NEGATIVE: 'validationNonNegative',
  VALIDATION_MIN_ITEMS: 'validationMinItems',

  // General messages
  INTERNAL_SERVER_ERROR: 'internalServerError',
  USER_NOT_FOUND: 'userNotFound',
  INVALID_CODE: 'invalidCode',
  RESOURCE_NOT_FOUND: 'resourceNotFound',
  ACCESS_DENIED: 'accessDenied',
} as const;

export type CommonMessageKey =
  (typeof CommonMessages)[keyof typeof CommonMessages];
