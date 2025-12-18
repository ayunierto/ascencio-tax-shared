export const AccountingMessages = {
  MERCHANT_REQUIRED: 'accountingMerchantRequired',
  DATE_REQUIRED: 'accountingDateRequired',
  TOTAL_INVALID: 'accountingTotalInvalid',
  TAX_INVALID: 'accountingTaxInvalid',
  IMAGE_URL_INVALID: 'accountingImageUrlInvalid',
  CATEGORY_ID_REQUIRED: 'accountingCategoryIdRequired',
  SUBCATEGORY_ID_INVALID: 'accountingSubcategoryIdInvalid',
  REPORT_START_REQUIRED: 'accountingReportStartRequired',
  REPORT_END_REQUIRED: 'accountingReportEndRequired',
} as const;

export const BookingsMessages = {
  SERVICE_ID_REQUIRED: 'bookingsServiceIdRequired',
  STAFF_ID_REQUIRED: 'bookingsStaffIdRequired',
  START_REQUIRED: 'bookingsStartRequired',
  END_REQUIRED: 'bookingsEndRequired',
  TIMEZONE_REQUIRED: 'bookingsTimezoneRequired',
  CANCELLATION_REASON_REQUIRED: 'bookingsCancellationReasonRequired',
  DAY_OF_WEEK_INVALID: 'bookingsDayOfWeekInvalid',
  START_TIME_INVALID: 'bookingsStartTimeInvalid',
  END_TIME_INVALID: 'bookingsEndTimeInvalid',
  DATE_REQUIRED: 'bookingsDateRequired',
} as const;

export const ServicesMessages = {
  NAME_REQUIRED: 'servicesNameRequired',
  NAME_MIN_LENGTH: 'servicesNameMinLength',
  DURATION_INVALID: 'servicesDurationInvalid',
  IMAGE_URL_INVALID: 'servicesImageUrlInvalid',
  STAFFIDS_REQUIRED: 'servicesStaffIdsRequired',
} as const;

export const UsersMessages = {
  FIRST_NAME_REQUIRED: 'usersFirstNameRequired',
  LAST_NAME_REQUIRED: 'usersLastNameRequired',
  EMAIL_REQUIRED: 'usersEmailRequired',
  INVALID_EMAIL: 'usersInvalidEmail',
  TIMEZONE_REQUIRED: 'usersTimezoneRequired',
  PASSWORD_REQUIRED: 'usersPasswordRequired',
  PASSWORD_MIN_LENGTH: 'usersPasswordMinLength',
  CONFIRM_PASSWORD_REQUIRED: 'usersConfirmPasswordRequired',
} as const;

export const BlogMessages = {
  TITLE_REQUIRED: 'blogTitleRequired',
  URL_INVALID: 'blogUrlInvalid',
} as const;

export const LogsMessages = {
  DESCRIPTION_REQUIRED: 'logsDescriptionRequired',
} as const;

export const AppVersionsMessages = {
  PLATFORM_REQUIRED: 'appVersionsPlatformRequired',
  MIN_SUPPORTED_REQUIRED: 'appVersionsMinSupportedRequired',
  LATEST_REQUIRED: 'appVersionsLatestRequired',
} as const;

export const NotificationMessages = {
  CLIENT_NAME_REQUIRED: 'notificationClientNameRequired',
  CLIENT_EMAIL_INVALID: 'notificationClientEmailInvalid',
  CLIENT_PHONE_REQUIRED: 'notificationClientPhoneRequired',
  STAFF_NAME_REQUIRED: 'notificationStaffNameRequired',
  APPOINTMENT_DATE_REQUIRED: 'notificationAppointmentDateRequired',
  APPOINTMENT_TIME_REQUIRED: 'notificationAppointmentTimeRequired',
  LOCATION_REQUIRED: 'notificationLocationRequired',
  SERVICE_NAME_REQUIRED: 'notificationServiceNameRequired',
  MEETING_LINK_INVALID: 'notificationMeetingLinkInvalid',
} as const;

export const SystemSettingsMessages = {
  KEY_REQUIRED: 'systemSettingsKeyRequired',
  VALUE_REQUIRED: 'systemSettingsValueRequired',
  TYPE_REQUIRED: 'systemSettingsTypeRequired',
} as const;

export const ZoomMessages = {
  TOPIC_REQUIRED: 'zoomTopicRequired',
  TYPE_INVALID: 'zoomTypeInvalid',
  START_TIME_INVALID: 'zoomStartTimeInvalid',
  DURATION_INVALID: 'zoomDurationInvalid',
} as const;

export const CategoriesMessages = {
  NAME_REQUIRED: 'categoriesNameRequired',
} as const;

export const StaffMembersMessages = {
  FIRST_NAME_REQUIRED: 'staffFirstNameRequired',
  LAST_NAME_REQUIRED: 'staffLastNameRequired',
  IS_ACTIVE_REQUIRED: 'staffIsActiveRequired',
} as const;

export type SchemaMessageKey =
  | (typeof AccountingMessages)[keyof typeof AccountingMessages]
  | (typeof BookingsMessages)[keyof typeof BookingsMessages]
  | (typeof ServicesMessages)[keyof typeof ServicesMessages]
  | (typeof UsersMessages)[keyof typeof UsersMessages]
  | (typeof BlogMessages)[keyof typeof BlogMessages]
  | (typeof LogsMessages)[keyof typeof LogsMessages]
  | (typeof AppVersionsMessages)[keyof typeof AppVersionsMessages]
  | (typeof NotificationMessages)[keyof typeof NotificationMessages]
  | (typeof SystemSettingsMessages)[keyof typeof SystemSettingsMessages]
  | (typeof ZoomMessages)[keyof typeof ZoomMessages]
  | (typeof CategoriesMessages)[keyof typeof CategoriesMessages]
  | (typeof StaffMembersMessages)[keyof typeof StaffMembersMessages];

export default {
  AccountingMessages,
  BookingsMessages,
  ServicesMessages,
  UsersMessages,
  BlogMessages,
  LogsMessages,
  AppVersionsMessages,
  NotificationMessages,
  SystemSettingsMessages,
  ZoomMessages,
  CategoriesMessages,
  StaffMembersMessages,
};
