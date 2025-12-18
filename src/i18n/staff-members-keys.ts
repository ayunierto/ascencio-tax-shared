import { CommonMessages } from './common-keys';

export const StaffMembersMessages = {
  FIRST_NAME_REQUIRED: CommonMessages.FIRST_NAME_REQUIRED,
  LAST_NAME_REQUIRED: CommonMessages.LAST_NAME_REQUIRED,
  IS_ACTIVE_REQUIRED: 'staffIsActiveRequired',
} as const;

export type StaffMembersMessageKey =
  (typeof StaffMembersMessages)[keyof typeof StaffMembersMessages];
