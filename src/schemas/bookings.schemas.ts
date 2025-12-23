import { z } from 'zod';
import { BookingsMessages, CommonMessages } from '../i18n';

// Appointments
export const createAppointmentSchema = z.object({
  serviceId: z.uuid({ error: CommonMessages.VALIDATION_UUID }),
  staffId: z.uuid({ error: CommonMessages.VALIDATION_UUID }),
  start: z.iso.datetime({ error: CommonMessages.VALIDATION_ISO_DATETIME }),
  end: z.iso.datetime({ error: CommonMessages.VALIDATION_ISO_DATETIME }),
  timeZone: z.string().nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  comments: z.string().optional(),
  source: z.enum(['app', 'admin', 'imported', 'api']).optional(),
});

export type CreateAppointmentRequest = z.infer<typeof createAppointmentSchema>;

export const updateAppointmentSchema = createAppointmentSchema.partial();

export type UpdateAppointmentRequest = z.infer<typeof updateAppointmentSchema>;

export const cancelAppointmentSchema = z.object({
  cancellationReason: z
    .string()
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
});

export type CancelAppointmentRequest = z.infer<typeof cancelAppointmentSchema>;

export const scheduleSchema = z.object({
  dayOfWeek: z
    .number({ error: CommonMessages.VALIDATION_NUMBER })
    .min(0, { error: CommonMessages.VALIDATION_MIN_VALUE })
    .max(6, { error: CommonMessages.VALIDATION_MAX_VALUE }),
  startTime: z
    .string({ error: CommonMessages.VALIDATION_REQUIRED })
    .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      error: CommonMessages.VALIDATION_INVALID_FORMAT,
    }),
  endTime: z
    .string({ error: CommonMessages.VALIDATION_REQUIRED })
    .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      error: CommonMessages.VALIDATION_INVALID_FORMAT,
    }),
});

export type CreateScheduleRequest = z.infer<typeof scheduleSchema>;

export const updateScheduleSchema = scheduleSchema.partial();

export type UpdateScheduleRequest = z.infer<typeof updateScheduleSchema>;

// Availability
export const searchAvailabilitySchema = z.object({
  serviceId: z.uuid({ error: CommonMessages.VALIDATION_UUID }),
  staffId: z.uuid({ error: CommonMessages.VALIDATION_UUID }).optional(),
  date: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  timeZone: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
});

export type SearchAvailabilityRequest = z.infer<
  typeof searchAvailabilitySchema
>;
