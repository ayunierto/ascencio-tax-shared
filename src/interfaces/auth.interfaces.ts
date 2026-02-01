import { MessageResponse } from './common.interfaces';

export interface UserTokenResponse {
  access_token: string;
  user: User;
}

// Full User Entity
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  imageUrl?: string | null;
  email: string;
  countryCode?: string;
  phoneNumber?: string;
  password?: string; // Should not be exposed in responses
  timeZone: string;
  locale?: string;
  isActive: boolean;
  roles: string[];
  isEmailVerified: boolean;
  verificationCode?: string;
  verificationCodeExpiresAt?: string;
  passwordResetCode?: string;
  passwordResetExpiresAt?: string;
  lastLoginAt?: string;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string;
}

export interface SimpleUser extends Omit<
  User,
  | 'isEmailVerified'
  | 'deletedAt'
  | 'verificationCode'
  | 'passwordResetCode'
  | 'verificationCodeExpiresAt'
  | 'passwordResetExpiresAt'
  | 'password'
> {}

export type SignInResponse = UserTokenResponse;
export type SignUpResponse = {
  message: string;
  user: Omit<
    User,
    | 'roles'
    | 'isActive'
    | 'isEmailVerified'
    | 'deletedAt'
    | 'lastLoginAt'
    | 'verificationCode'
    | 'passwordResetCode'
    | 'verificationCodeExpiresAt'
    | 'passwordResetExpiresAt'
  >;
};
export type VerifyEmailCodeResponse = UserTokenResponse;
export type ResendEmailCodeResponse = MessageResponse;
export type ForgotPasswordResponse = MessageResponse;
export type ResetPasswordResponse = UserTokenResponse;
export type ResendResetPasswordCodeResponse = MessageResponse;
export type CheckStatusResponse = UserTokenResponse;
export type ChangePasswordResponse = UserTokenResponse;
export type UpdateProfileResponse = User;
export type DeleteAccountResponse = MessageResponse;
