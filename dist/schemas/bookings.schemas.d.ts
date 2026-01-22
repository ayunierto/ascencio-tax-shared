import { z } from 'zod';
export declare const createAppointmentSchema: z.ZodObject<{
    serviceId: z.ZodUUID;
    staffId: z.ZodUUID;
    start: z.ZodISODateTime;
    end: z.ZodISODateTime;
    timeZone: z.ZodString;
    comments: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodEnum<{
        imported: "imported";
        api: "api";
        app: "app";
        admin: "admin";
    }>>;
}, z.core.$strip>;
export type CreateAppointmentRequest = z.infer<typeof createAppointmentSchema>;
export declare const updateAppointmentSchema: z.ZodObject<{
    serviceId: z.ZodOptional<z.ZodUUID>;
    staffId: z.ZodOptional<z.ZodUUID>;
    start: z.ZodOptional<z.ZodISODateTime>;
    end: z.ZodOptional<z.ZodISODateTime>;
    timeZone: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    source: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        imported: "imported";
        api: "api";
        app: "app";
        admin: "admin";
    }>>>;
}, z.core.$strip>;
export type UpdateAppointmentRequest = z.infer<typeof updateAppointmentSchema>;
export declare const cancelAppointmentSchema: z.ZodObject<{
    cancellationReason: z.ZodString;
}, z.core.$strip>;
export type CancelAppointmentRequest = z.infer<typeof cancelAppointmentSchema>;
export declare const scheduleSchema: z.ZodObject<{
    dayOfWeek: z.ZodNumber;
    startTime: z.ZodString;
    endTime: z.ZodString;
}, z.core.$strip>;
export type CreateScheduleRequest = z.infer<typeof scheduleSchema>;
export declare const updateScheduleSchema: z.ZodObject<{
    dayOfWeek: z.ZodOptional<z.ZodNumber>;
    startTime: z.ZodOptional<z.ZodString>;
    endTime: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UpdateScheduleRequest = z.infer<typeof updateScheduleSchema>;
export declare const searchAvailabilitySchema: z.ZodObject<{
    serviceId: z.ZodUUID;
    staffId: z.ZodOptional<z.ZodUUID>;
    date: z.ZodString;
    timeZone: z.ZodString;
}, z.core.$strip>;
export type SearchAvailabilityRequest = z.infer<typeof searchAvailabilitySchema>;
//# sourceMappingURL=bookings.schemas.d.ts.map