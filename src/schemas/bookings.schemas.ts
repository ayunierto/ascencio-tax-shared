import { z } from 'zod';
import { ValidationMessages as ValMsgs } from '../i18n';

// Appointments
export const createAppointmentSchema = z.object({
  serviceId: z.uuid({ error: ValMsgs.UUID }),
  staffId: z.uuid({ error: ValMsgs.UUID }),
  start: z.iso.datetime({ error: ValMsgs.ISO_DATETIME }),
  end: z.iso.datetime({ error: ValMsgs.ISO_DATETIME }),
  timeZone: z.string().nonempty({ error: ValMsgs.REQUIRED }),
  comments: z.string().optional(),
  source: z.enum(['app', 'admin', 'imported', 'api']).optional(),
});

export type CreateAppointmentRequest = z.infer<typeof createAppointmentSchema>;

export const updateAppointmentSchema = createAppointmentSchema.partial();

export type UpdateAppointmentRequest = z.infer<typeof updateAppointmentSchema>;

export const cancelAppointmentSchema = z.object({
  cancellationReason: z.string().nonempty({ error: ValMsgs.REQUIRED }),
});

export type CancelAppointmentRequest = z.infer<typeof cancelAppointmentSchema>;

export const scheduleSchema = z.object({
  dayOfWeek: z
    .number({ error: ValMsgs.NUMBER })
    .min(0, { error: ValMsgs.MIN_VALUE })
    .max(6, { error: ValMsgs.MAX_VALUE }),
  startTime: z
    .string({ error: ValMsgs.REQUIRED })
    .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      error: ValMsgs.INVALID_FORMAT,
    }),
  endTime: z
    .string({ error: ValMsgs.REQUIRED })
    .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      error: ValMsgs.INVALID_FORMAT,
    }),
});

export type CreateScheduleRequest = z.infer<typeof scheduleSchema>;

export const updateScheduleSchema = scheduleSchema.partial();

export type UpdateScheduleRequest = z.infer<typeof updateScheduleSchema>;

// Availability
export const searchAvailabilitySchema = z.object({
  serviceId: z.uuid({ error: ValMsgs.UUID }),
  staffId: z.uuid({ error: ValMsgs.UUID }).optional(),
  date: z
    .string({ error: ValMsgs.STRING })
    .nonempty({ error: ValMsgs.REQUIRED }),
  timeZone: z
    .string({ error: ValMsgs.STRING })
    .nonempty({ error: ValMsgs.REQUIRED }),
});

export type SearchAvailabilityRequest = z.infer<
  typeof searchAvailabilitySchema
>;
