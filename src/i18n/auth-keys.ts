export const AuthMessages = {
  EMAIL_REQUIRED: 'emailRequired',
  INVALID_EMAIL: 'invalidEmail',
  PASSWORD_REQUIRED: 'passwordRequired',
  INVALID_CREDENTIALS: 'invalidCredentials',
  LOGIN_SUCCESS: 'loginSuccess',

  FIRST_NAME_REQUIRED: 'firstNameRequired',
  LAST_NAME_REQUIRED: 'lastNameRequired',
  TIMEZONE_REQUIRED: 'timezoneRequired',
} as const;

export type AuthMessageKey = (typeof AuthMessages)[keyof typeof AuthMessages];
