"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentDetailsSchema = void 0;
const zod_1 = require("zod");
const i18n_1 = require("../i18n");
// Notification - Appointment Details
exports.appointmentDetailsSchema = zod_1.z.object({
    clientName: zod_1.z
        .string({ error: i18n_1.ValidationMessages.STRING })
        .nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
    clientEmail: zod_1.z
        .email({ error: i18n_1.ValidationMessages.EMAIL })
        .nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
    clientPhoneNumber: zod_1.z
        .string({ error: i18n_1.ValidationMessages.STRING })
        .nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
    staffName: zod_1.z
        .string({ error: i18n_1.ValidationMessages.STRING })
        .nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
    appointmentDate: zod_1.z
        .string({ error: i18n_1.ValidationMessages.STRING })
        .nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
    appointmentTime: zod_1.z
        .string({ error: i18n_1.ValidationMessages.STRING })
        .nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
    location: zod_1.z
        .string({ error: i18n_1.ValidationMessages.STRING })
        .nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
    serviceName: zod_1.z
        .string({ error: i18n_1.ValidationMessages.STRING })
        .nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
    meetingLink: zod_1.z.url({ error: i18n_1.ValidationMessages.URL }).optional(),
});
