import { CommonMessages } from './common-keys';

export const NotificationMessages = {} as const;

export type NotificationMessageKey =
  (typeof NotificationMessages)[keyof typeof NotificationMessages];
