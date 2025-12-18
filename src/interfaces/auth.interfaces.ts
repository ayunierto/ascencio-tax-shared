import { PaginatedResponse, MessageResponse } from './common.interfaces';

export interface UserTokenResponse {
  access_token: string;
  user: BasicUser;
}

export interface UserMessageResponse extends MessageResponse {
  user?: BasicUser;
}

export interface OnlyMessageResponse extends MessageResponse {}

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
export type BasicUser = Omit<
  User,
  | 'password'
  | 'verificationCode'
  | 'passwordResetCode'
  | 'verificationCodeExpiresAt'
  | 'passwordResetExpiresAt'
>;

export type UsersResponse = PaginatedResponse<BasicUser>;
