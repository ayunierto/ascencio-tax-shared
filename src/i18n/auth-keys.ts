import { CommonMessages } from './common-keys';

export const AuthMessages = {
  EMAIL_REQUIRED: CommonMessages.EMAIL_REQUIRED,
  INVALID_EMAIL: CommonMessages.INVALID_EMAIL,
  PASSWORD_REQUIRED: CommonMessages.PASSWORD_REQUIRED,
  INVALID_CREDENTIALS: 'invalidCredentials',
  LOGIN_SUCCESS: 'loginSuccess',

  FIRST_NAME_REQUIRED: CommonMessages.FIRST_NAME_REQUIRED,
  LAST_NAME_REQUIRED: CommonMessages.LAST_NAME_REQUIRED,
  TIMEZONE_REQUIRED: CommonMessages.TIMEZONE_REQUIRED,
} as const;

export type AuthMessageKey = (typeof AuthMessages)[keyof typeof AuthMessages];
