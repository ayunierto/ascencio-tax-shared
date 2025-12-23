import { CommonMessages } from './common-keys';

export const BookingsMessages = {} as const;

export type BookingsMessageKey =
  (typeof BookingsMessages)[keyof typeof BookingsMessages];
