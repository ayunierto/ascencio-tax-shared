"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calendarWebhookParamsSchema = exports.calendarDisconnectParamsSchema = exports.calendarOauthCallbackQuerySchema = exports.calendarClientConnectQuerySchema = exports.calendarStaffConnectQuerySchema = exports.calendarCompanyConnectQuerySchema = exports.listCalendarEventsQuerySchema = exports.importExternalEventsSchema = exports.calendarActorTypeSchema = void 0;
const zod_1 = require("zod");
const i18n_1 = require("../i18n");
exports.calendarActorTypeSchema = zod_1.z.enum(['company', 'staff', 'client']);
exports.importExternalEventsSchema = zod_1.z.object({
    startDateTime: zod_1.z.iso.datetime({ error: i18n_1.ValidationMessages.ISO_DATETIME }),
    endDateTime: zod_1.z.iso.datetime({ error: i18n_1.ValidationMessages.ISO_DATETIME }),
    calendarId: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional(),
    defaultTimeZone: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional(),
});
exports.listCalendarEventsQuerySchema = zod_1.z
    .object({
    startDateTime: zod_1.z.iso.datetime({ error: i18n_1.ValidationMessages.ISO_DATETIME }).optional(),
    endDateTime: zod_1.z.iso.datetime({ error: i18n_1.ValidationMessages.ISO_DATETIME }).optional(),
    staffMemberId: zod_1.z.uuid({ error: i18n_1.ValidationMessages.UUID }).optional(),
    timeZone: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional(),
})
    .refine((value) => (value.startDateTime == null && value.endDateTime == null) ||
    (value.startDateTime != null && value.endDateTime != null), { error: i18n_1.ValidationMessages.REQUIRED });
exports.calendarCompanyConnectQuerySchema = zod_1.z.object({
    calendarId: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional(),
    redirectUrl: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional(),
});
exports.calendarStaffConnectQuerySchema = zod_1.z.object({
    staffMemberId: zod_1.z.uuid({ error: i18n_1.ValidationMessages.UUID }),
    redirectUrl: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional(),
});
exports.calendarClientConnectQuerySchema = zod_1.z.object({
    redirectUrl: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional(),
});
exports.calendarOauthCallbackQuerySchema = zod_1.z
    .object({
    code: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional(),
    state: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional(),
    error: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional(),
})
    .refine((value) => value.error != null || value.code != null, {
    error: i18n_1.ValidationMessages.REQUIRED,
})
    .refine((value) => value.error != null || value.state != null, {
    error: i18n_1.ValidationMessages.REQUIRED,
});
exports.calendarDisconnectParamsSchema = zod_1.z.object({
    actorType: exports.calendarActorTypeSchema,
    actorId: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).nonempty({
        error: i18n_1.ValidationMessages.REQUIRED,
    }),
});
exports.calendarWebhookParamsSchema = zod_1.z.object({
    actorType: exports.calendarActorTypeSchema,
    actorId: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).nonempty({
        error: i18n_1.ValidationMessages.REQUIRED,
    }),
});
