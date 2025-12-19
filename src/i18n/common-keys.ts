export const CommonMessages = {
  FIRST_NAME_REQUIRED: 'firstNameRequired',
  LAST_NAME_REQUIRED: 'lastNameRequired',
  TIMEZONE_REQUIRED: 'timezoneRequired',
  EMAIL_REQUIRED: 'emailRequired',
  INVALID_EMAIL: 'invalidEmail',
  PASSWORD_REQUIRED: 'passwordRequired',
  SERVICE_NAME_REQUIRED: 'serviceNameRequired',
  DURATION_INVALID: 'durationInvalid',
  START_TIME_INVALID: 'startTimeInvalid',
  CODE_LENGTH: 'codeLength',
  CODE_REQUIRED: 'codeRequired',
  INTERNAL_SERVER_ERROR: 'internalServerError',
  USER_NOT_FOUND: 'userNotFound',
} as const;

export type CommonMessageKey =
  (typeof CommonMessages)[keyof typeof CommonMessages];
