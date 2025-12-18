import { MessageResponse } from './common.interfaces';

export interface UserTokenResponse {
  access_token: string;
  user: SimpleUser;
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
  locale?: string;
  timeZone: string;
  roles: string[];
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt?: Date;
  password?: string; // Should not be exposed in responses
  isActive: boolean;
  isEmailVerified: boolean;
  verificationCode?: string | null;
  verificationCodeExpiresAt?: Date | null;
  passwordResetCode?: string | null;
  passwordResetExpiresAt?: Date | null;
  deletedAt?: Date | null;
}

// User without sensitive fields
export type SimpleUser = Omit<
  User,
  | 'password'
  | 'verificationCode'
  | 'passwordResetCode'
  | 'verificationCodeExpiresAt'
  | 'passwordResetExpiresAt'
>;

export type SignInResponse = UserTokenResponse;
export type SignUpResponse = {
  message: string;
  user: Omit<
    SimpleUser,
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
export type VerifyEmailResponse = UserTokenResponse;
export type ResendEmailCodeResponse = MessageResponse;
export type ForgotPasswordResponse = MessageResponse;
export type ResetPasswordResponse = UserTokenResponse;
export type ResendResetPasswordCodeResponse = MessageResponse;
export type CheckStatusResponse = UserTokenResponse;
export type ChangePasswordResponse = UserTokenResponse;
export type UpdateProfileResponse = SimpleUser;
export type DeleteAccountResponse = MessageResponse;
