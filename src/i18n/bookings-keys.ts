export const BookingsMessages = {
  SERVICE_DURATION_REQUIRED: 'bookingServiceDurationRequired',
  SERVICE_WITHOUT_STAFF: 'bookingServiceWithoutStaff',
  SLOT_END_CALCULATION_FAILED: 'bookingSlotEndCalculationFailed',
  SLOT_OVERLAP: 'bookingSlotOverlap',
} as const;

export type BookingsMessageKey =
  (typeof BookingsMessages)[keyof typeof BookingsMessages];
