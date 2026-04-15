import { z } from 'zod';
export declare const calendarActorTypeSchema: z.ZodEnum<{
    staff: "staff";
    company: "company";
    client: "client";
}>;
export declare const importExternalEventsSchema: z.ZodObject<{
    startDateTime: z.ZodISODateTime;
    endDateTime: z.ZodISODateTime;
    calendarId: z.ZodOptional<z.ZodString>;
    defaultTimeZone: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ImportExternalEventsRequest = z.infer<typeof importExternalEventsSchema>;
export declare const listCalendarEventsQuerySchema: z.ZodObject<{
    startDateTime: z.ZodOptional<z.ZodISODateTime>;
    endDateTime: z.ZodOptional<z.ZodISODateTime>;
    staffMemberId: z.ZodOptional<z.ZodUUID>;
    timeZone: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListCalendarEventsQueryRequest = z.infer<typeof listCalendarEventsQuerySchema>;
export declare const calendarCompanyConnectQuerySchema: z.ZodObject<{
    calendarId: z.ZodOptional<z.ZodString>;
    redirectUrl: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CalendarCompanyConnectQueryRequest = z.infer<typeof calendarCompanyConnectQuerySchema>;
export declare const calendarStaffConnectQuerySchema: z.ZodObject<{
    staffMemberId: z.ZodUUID;
    redirectUrl: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CalendarStaffConnectQueryRequest = z.infer<typeof calendarStaffConnectQuerySchema>;
export declare const calendarClientConnectQuerySchema: z.ZodObject<{
    calendarId: z.ZodOptional<z.ZodString>;
    redirectUrl: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CalendarClientConnectQueryRequest = z.infer<typeof calendarClientConnectQuerySchema>;
export declare const calendarOauthCallbackQuerySchema: z.ZodObject<{
    code: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
    error: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CalendarOauthCallbackQueryRequest = z.infer<typeof calendarOauthCallbackQuerySchema>;
export declare const calendarDisconnectParamsSchema: z.ZodObject<{
    actorType: z.ZodEnum<{
        staff: "staff";
        company: "company";
        client: "client";
    }>;
    actorId: z.ZodString;
}, z.core.$strip>;
export type CalendarDisconnectParamsRequest = z.infer<typeof calendarDisconnectParamsSchema>;
export declare const calendarWebhookParamsSchema: z.ZodObject<{
    actorType: z.ZodEnum<{
        staff: "staff";
        company: "company";
        client: "client";
    }>;
    actorId: z.ZodString;
}, z.core.$strip>;
export type CalendarWebhookParamsRequest = z.infer<typeof calendarWebhookParamsSchema>;
//# sourceMappingURL=calendar.schemas.d.ts.map