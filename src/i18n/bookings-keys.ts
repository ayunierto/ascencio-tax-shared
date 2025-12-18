import { CommonMessages } from './common-keys';

export const BookingsMessages = {
  SERVICE_ID_REQUIRED: 'serviceIdRequired',
  STAFF_ID_REQUIRED: 'staffIdRequired',
  START_REQUIRED: 'startRequired',
  END_REQUIRED: 'endRequired',
  TIMEZONE_REQUIRED: CommonMessages.TIMEZONE_REQUIRED,
  CANCELLATION_REASON_REQUIRED: 'cancellationReasonRequired',
  DAY_OF_WEEK_INVALID: 'dayOfWeekInvalid',
  START_TIME_INVALID: CommonMessages.START_TIME_INVALID,
  END_TIME_INVALID: 'endTimeInvalid',
  DATE_REQUIRED: 'dateRequired',
} as const;

export type BookingsMessageKey =
  (typeof BookingsMessages)[keyof typeof BookingsMessages];
