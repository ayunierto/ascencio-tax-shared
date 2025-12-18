import { z } from 'zod';
import { BookingsMessages } from '../i18n';

// Appointments
export const createAppointmentSchema = z.object({
  serviceId: z.uuid({ error: BookingsMessages.SERVICE_ID_REQUIRED }),
  staffId: z.uuid({ error: BookingsMessages.STAFF_ID_REQUIRED }),
  start: z
    .string({ error: BookingsMessages.START_REQUIRED })
    .datetime({ error: BookingsMessages.START_REQUIRED }),
  end: z
    .string({ error: BookingsMessages.END_REQUIRED })
    .datetime({ error: BookingsMessages.END_REQUIRED }),
  timeZone: z
    .string({ error: BookingsMessages.TIMEZONE_REQUIRED })
    .min(1, { error: BookingsMessages.TIMEZONE_REQUIRED }),
  comments: z.string().optional(),
  source: z.enum(['app', 'admin', 'imported', 'api']).optional(),
});

export type CreateAppointmentDto = z.infer<typeof createAppointmentSchema>;

export const updateAppointmentSchema = createAppointmentSchema.partial();

export type UpdateAppointmentDto = z.infer<typeof updateAppointmentSchema>;

export const cancelAppointmentSchema = z.object({
  cancellationReason: z
    .string({ error: BookingsMessages.CANCELLATION_REASON_REQUIRED })
    .min(1, { error: BookingsMessages.CANCELLATION_REASON_REQUIRED }),
});

export type CancelAppointmentDto = z.infer<typeof cancelAppointmentSchema>;

// Schedules
export const scheduleSchema = z.object({
  dayOfWeek: z
    .number({ error: BookingsMessages.DAY_OF_WEEK_INVALID })
    .int({ error: BookingsMessages.DAY_OF_WEEK_INVALID })
    .min(0, { error: BookingsMessages.DAY_OF_WEEK_INVALID })
    .max(6, { error: BookingsMessages.DAY_OF_WEEK_INVALID }),
  startTime: z
    .string({ error: BookingsMessages.START_TIME_INVALID })
    .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      error: BookingsMessages.START_TIME_INVALID,
    }),
  endTime: z
    .string({ error: BookingsMessages.END_TIME_INVALID })
    .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      error: BookingsMessages.END_TIME_INVALID,
    }),
});

export type CreateScheduleDto = z.infer<typeof scheduleSchema>;

export const updateScheduleSchema = scheduleSchema.partial();

export type UpdateScheduleDto = z.infer<typeof updateScheduleSchema>;

// Availability
export const searchAvailabilitySchema = z.object({
  serviceId: z.uuid({ error: BookingsMessages.SERVICE_ID_REQUIRED }),
  staffId: z.uuid({ error: BookingsMessages.STAFF_ID_REQUIRED }).optional(),
  date: z
    .string({ error: BookingsMessages.DATE_REQUIRED })
    .min(1, { error: BookingsMessages.DATE_REQUIRED }),
  timeZone: z
    .string({ error: BookingsMessages.TIMEZONE_REQUIRED })
    .min(1, { error: BookingsMessages.TIMEZONE_REQUIRED }),
});

export type SearchAvailabilityDto = z.infer<typeof searchAvailabilitySchema>;
