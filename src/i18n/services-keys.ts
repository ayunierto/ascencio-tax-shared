import { CommonMessages } from './common-keys';

export const ServicesMessages = {
  NAME_REQUIRED: CommonMessages.SERVICE_NAME_REQUIRED,
  DURATION_INVALID: CommonMessages.DURATION_INVALID,
  IMAGE_URL_INVALID: 'imageUrlInvalid',
  STAFFIDS_REQUIRED: 'staffIdsRequired',
  STAFF_ID_INVALID: 'staffIdInvalid',
  AVAILABLE_ONLINE_REQUIRED: 'availableOnlineRequired',
  ACTIVE_FLAG_REQUIRED: 'activeFlagRequired',
} as const;

export type ServicesMessageKey =
  (typeof ServicesMessages)[keyof typeof ServicesMessages];
