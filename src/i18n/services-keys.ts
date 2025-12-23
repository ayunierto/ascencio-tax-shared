import { CommonMessages } from './common-keys';

export const ServicesMessages = {} as const;

export type ServicesMessageKey =
  (typeof ServicesMessages)[keyof typeof ServicesMessages];
