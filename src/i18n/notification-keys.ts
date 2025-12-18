import { CommonMessages } from './common-keys';

export const NotificationMessages = {
  CLIENT_NAME_REQUIRED: 'clientNameRequired',
  CLIENT_EMAIL_INVALID: 'clientEmailInvalid',
  CLIENT_PHONE_REQUIRED: 'clientPhoneRequired',
  STAFF_NAME_REQUIRED: 'staffNameRequired',
  APPOINTMENT_DATE_REQUIRED: 'appointmentDateRequired',
  APPOINTMENT_TIME_REQUIRED: 'appointmentTimeRequired',
  LOCATION_REQUIRED: 'locationRequired',
  SERVICE_NAME_REQUIRED: CommonMessages.SERVICE_NAME_REQUIRED,
  MEETING_LINK_INVALID: 'meetingLinkInvalid',
} as const;

export type NotificationMessageKey =
  (typeof NotificationMessages)[keyof typeof NotificationMessages];
