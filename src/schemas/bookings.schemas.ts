import { z } from 'zod';

// Appointments
export const createAppointmentSchema = z.object({
  serviceId: z.uuid(),
  staffId: z.uuid(),
  start: z.iso.datetime(),
  end: z.iso.datetime(),
  timeZone: z.string(),
  comments: z.string().optional(),
  source: z.enum(['app', 'admin', 'imported', 'api']).optional(),
});

export type CreateAppointmentDto = z.infer<typeof createAppointmentSchema>;

export const updateAppointmentSchema = createAppointmentSchema.partial();

export type UpdateAppointmentDto = z.infer<typeof updateAppointmentSchema>;

export const cancelAppointmentSchema = z.object({
  cancellationReason: z.string().min(1),
});

export type CancelAppointmentDto = z.infer<typeof cancelAppointmentSchema>;

// Schedules
export const scheduleSchema = z.object({
  dayOfWeek: z.number().int().min(0).max(6),
  startTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/),
  endTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/),
});

export type CreateScheduleDto = z.infer<typeof scheduleSchema>;

export const updateScheduleSchema = scheduleSchema.partial();

export type UpdateScheduleDto = z.infer<typeof updateScheduleSchema>;

// Availability
export const searchAvailabilitySchema = z.object({
  serviceId: z.uuid(),
  staffId: z.uuid().optional(),
  date: z.string(),
  timeZone: z.string(),
});

export type SearchAvailabilityDto = z.infer<typeof searchAvailabilitySchema>;
