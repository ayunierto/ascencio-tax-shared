import { CommonMessages } from './common-keys';

export const StaffMembersMessages = {} as const;

export type StaffMembersMessageKey =
  (typeof StaffMembersMessages)[keyof typeof StaffMembersMessages];
