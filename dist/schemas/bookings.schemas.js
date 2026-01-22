"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchAvailabilitySchema = exports.updateScheduleSchema = exports.scheduleSchema = exports.cancelAppointmentSchema = exports.updateAppointmentSchema = exports.createAppointmentSchema = void 0;
const zod_1 = require("zod");
const i18n_1 = require("../i18n");
// Appointments
exports.createAppointmentSchema = zod_1.z.object({
    serviceId: zod_1.z.uuid({ error: i18n_1.ValidationMessages.UUID }),
    staffId: zod_1.z.uuid({ error: i18n_1.ValidationMessages.UUID }),
    start: zod_1.z.iso.datetime({ error: i18n_1.ValidationMessages.ISO_DATETIME }),
    end: zod_1.z.iso.datetime({ error: i18n_1.ValidationMessages.ISO_DATETIME }),
    timeZone: zod_1.z.string().nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
    comments: zod_1.z.string().optional(),
    source: zod_1.z.enum(['app', 'admin', 'imported', 'api']).optional(),
});
exports.updateAppointmentSchema = exports.createAppointmentSchema.partial();
exports.cancelAppointmentSchema = zod_1.z.object({
    cancellationReason: zod_1.z.string().nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
});
exports.scheduleSchema = zod_1.z.object({
    dayOfWeek: zod_1.z
        .number({ error: i18n_1.ValidationMessages.NUMBER })
        .min(0, { error: i18n_1.ValidationMessages.MIN_VALUE })
        .max(6, { error: i18n_1.ValidationMessages.MAX_VALUE }),
    startTime: zod_1.z
        .string({ error: i18n_1.ValidationMessages.REQUIRED })
        .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
        error: i18n_1.ValidationMessages.INVALID_FORMAT,
    }),
    endTime: zod_1.z
        .string({ error: i18n_1.ValidationMessages.REQUIRED })
        .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
        error: i18n_1.ValidationMessages.INVALID_FORMAT,
    }),
});
exports.updateScheduleSchema = exports.scheduleSchema.partial();
// Availability
exports.searchAvailabilitySchema = zod_1.z.object({
    serviceId: zod_1.z.uuid({ error: i18n_1.ValidationMessages.UUID }),
    staffId: zod_1.z.uuid({ error: i18n_1.ValidationMessages.UUID }).optional(),
    date: zod_1.z
        .string({ error: i18n_1.ValidationMessages.STRING })
        .nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
    timeZone: zod_1.z
        .string({ error: i18n_1.ValidationMessages.STRING })
        .nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
});
