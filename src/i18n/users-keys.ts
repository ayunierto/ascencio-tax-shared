import { CommonMessages } from './common-keys';

export const UsersMessages = {
  FIRST_NAME_REQUIRED: CommonMessages.FIRST_NAME_REQUIRED,
  LAST_NAME_REQUIRED: CommonMessages.LAST_NAME_REQUIRED,
  EMAIL_REQUIRED: CommonMessages.EMAIL_REQUIRED,
  INVALID_EMAIL: CommonMessages.INVALID_EMAIL,
  TIMEZONE_REQUIRED: CommonMessages.TIMEZONE_REQUIRED,
  PASSWORD_REQUIRED: CommonMessages.PASSWORD_REQUIRED,
  PASSWORD_MIN_LENGTH: 'passwordMinLength',
  PASSWORD_MAX_LENGTH: 'passwordMaxLength',
  CONFIRM_PASSWORD_REQUIRED: 'confirmPasswordRequired',
} as const;

export type UsersMessageKey =
  (typeof UsersMessages)[keyof typeof UsersMessages];
