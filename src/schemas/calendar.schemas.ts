import { z } from 'zod';
import { ValidationMessages as ValMsgs } from '../i18n';

export const calendarActorTypeSchema = z.enum(['company', 'staff', 'client']);

export const importExternalEventsSchema = z.object({
  startDateTime: z.iso.datetime({ error: ValMsgs.ISO_DATETIME }),
  endDateTime: z.iso.datetime({ error: ValMsgs.ISO_DATETIME }),
  calendarId: z.string({ error: ValMsgs.STRING }).optional(),
  defaultTimeZone: z.string({ error: ValMsgs.STRING }).optional(),
});

export type ImportExternalEventsRequest = z.infer<
  typeof importExternalEventsSchema
>;

export const listCalendarEventsQuerySchema = z
  .object({
    startDateTime: z.iso.datetime({ error: ValMsgs.ISO_DATETIME }).optional(),
    endDateTime: z.iso.datetime({ error: ValMsgs.ISO_DATETIME }).optional(),
    staffMemberId: z.uuid({ error: ValMsgs.UUID }).optional(),
    timeZone: z.string({ error: ValMsgs.STRING }).optional(),
  })
  .refine(
    (value) =>
      (value.startDateTime == null && value.endDateTime == null) ||
      (value.startDateTime != null && value.endDateTime != null),
    { error: ValMsgs.REQUIRED },
  );

export type ListCalendarEventsQueryRequest = z.infer<
  typeof listCalendarEventsQuerySchema
>;

export const calendarCompanyConnectQuerySchema = z.object({
  calendarId: z.string({ error: ValMsgs.STRING }).optional(),
  redirectUrl: z.string({ error: ValMsgs.STRING }).optional(),
});

export type CalendarCompanyConnectQueryRequest = z.infer<
  typeof calendarCompanyConnectQuerySchema
>;

export const calendarStaffConnectQuerySchema = z.object({
  staffMemberId: z.uuid({ error: ValMsgs.UUID }),
  redirectUrl: z.string({ error: ValMsgs.STRING }).optional(),
});

export type CalendarStaffConnectQueryRequest = z.infer<
  typeof calendarStaffConnectQuerySchema
>;

export const calendarClientConnectQuerySchema = z.object({
  redirectUrl: z.string({ error: ValMsgs.STRING }).optional(),
});

export type CalendarClientConnectQueryRequest = z.infer<
  typeof calendarClientConnectQuerySchema
>;

export const calendarOauthCallbackQuerySchema = z
  .object({
    code: z.string({ error: ValMsgs.STRING }).optional(),
    state: z.string({ error: ValMsgs.STRING }).optional(),
    error: z.string({ error: ValMsgs.STRING }).optional(),
  })
  .refine((value) => value.error != null || value.code != null, {
    error: ValMsgs.REQUIRED,
  })
  .refine((value) => value.error != null || value.state != null, {
    error: ValMsgs.REQUIRED,
  });

export type CalendarOauthCallbackQueryRequest = z.infer<
  typeof calendarOauthCallbackQuerySchema
>;

export const calendarDisconnectParamsSchema = z.object({
  actorType: calendarActorTypeSchema,
  actorId: z.string({ error: ValMsgs.STRING }).nonempty({
    error: ValMsgs.REQUIRED,
  }),
});

export type CalendarDisconnectParamsRequest = z.infer<
  typeof calendarDisconnectParamsSchema
>;

export const calendarWebhookParamsSchema = z.object({
  actorType: calendarActorTypeSchema,
  actorId: z.string({ error: ValMsgs.STRING }).nonempty({
    error: ValMsgs.REQUIRED,
  }),
});

export type CalendarWebhookParamsRequest = z.infer<
  typeof calendarWebhookParamsSchema
>;
