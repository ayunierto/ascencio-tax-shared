import { CommonMessages } from './common-keys';

export const UsersMessages = {} as const;

export type UsersMessageKey =
  (typeof UsersMessages)[keyof typeof UsersMessages];
