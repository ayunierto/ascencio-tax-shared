import { CommonMessages } from './common-keys';

export const AuthMessages = {
  EMAIL_REQUIRED: CommonMessages.EMAIL_REQUIRED,
  PASSWORD_REQUIRED: CommonMessages.PASSWORD_REQUIRED,
  FIRST_NAME_REQUIRED: CommonMessages.FIRST_NAME_REQUIRED,
  LAST_NAME_REQUIRED: CommonMessages.LAST_NAME_REQUIRED,
  TIMEZONE_REQUIRED: CommonMessages.TIMEZONE_REQUIRED,

  INVALID_CREDENTIALS: 'invalidCredentials',
  INVALID_EMAIL: CommonMessages.INVALID_EMAIL,
  INVALID_CODE: 'invalidCode',
  INVALID_PASSWORD: 'invalidPassword',

  LOGIN_SUCCESS: 'loginSuccess',
  SIGN_UP_SUCCESS: 'signUpSuccess',

  ACCOUNT_LOCKED: 'accountLocked',
  EMAIL_NOT_VERIFIED: 'emailNotVerified',

  EMAIL_ALREADY_EXISTS: 'emailAlreadyExists',
  EMAIL_ALREADY_VERIFIED: 'emailAlreadyVerified',
  CODE_EXPIRED: 'codeExpired',
  FAILED_TO_VERIFY_EMAIL: 'failedToVerifyEmail',
  VERIFICATION_EMAIL_RESENT: 'verificationEmailResent',
  RESET_CODE_SENT: 'resetCodeSent',
  RESET_PASSWORD_EMAIL_SENT: 'resetPasswordEmailSent',
  GOOGLE_PROFILE_MISSING_EMAIL: 'googleProfileMissingEmail',
  INVALID_CURRENT_PASSWORD: 'invalidCurrentPassword',
  ACCOUNT_DELETED: 'accountDeleted',
} as const;

export type AuthMessageKey = (typeof AuthMessages)[keyof typeof AuthMessages];
