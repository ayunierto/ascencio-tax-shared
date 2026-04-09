export const BookingsMessages = {
  SERVICE_DURATION_REQUIRED: 'bookingServiceDurationRequired',
  SERVICE_WITHOUT_STAFF: 'bookingServiceWithoutStaff',
  SLOT_END_CALCULATION_FAILED: 'bookingSlotEndCalculationFailed',
} as const;

export type BookingsMessageKey =
  (typeof BookingsMessages)[keyof typeof BookingsMessages];
