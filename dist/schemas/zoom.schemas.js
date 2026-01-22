"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateZoomMeetingSchema = exports.createZoomMeetingSchema = exports.zoomMeetingSettingsSchema = void 0;
const zod_1 = require("zod");
const i18n_1 = require("../i18n");
// Zoom Meeting Settings
exports.zoomMeetingSettingsSchema = zod_1.z.object({
    host_video: zod_1.z.boolean().optional(),
    participant_video: zod_1.z.boolean().optional(),
    join_before_host: zod_1.z.boolean().optional(),
    mute_upon_entry: zod_1.z.boolean().optional(),
    watermark: zod_1.z.boolean().optional(),
    audio: zod_1.z.string().optional(),
    auto_recording: zod_1.z.string().optional(),
});
// Zoom Meeting
exports.createZoomMeetingSchema = zod_1.z.object({
    agenda: zod_1.z.string().optional(),
    topic: zod_1.z
        .string({ error: i18n_1.ValidationMessages.STRING })
        .min(1, { error: i18n_1.ValidationMessages.REQUIRED }),
    type: zod_1.z
        .number({ error: i18n_1.ValidationMessages.NUMBER })
        .int({ error: i18n_1.ValidationMessages.NUMBER })
        .optional()
        .default(2),
    start_time: zod_1.z
        .string({ error: i18n_1.ValidationMessages.STRING })
        .min(1, { error: i18n_1.ValidationMessages.REQUIRED })
        .optional(),
    duration: zod_1.z
        .number({ error: i18n_1.ValidationMessages.NUMBER })
        .int({ error: i18n_1.ValidationMessages.NUMBER })
        .optional(),
    timezone: zod_1.z.string().optional(),
    password: zod_1.z.string().optional(),
    default_password: zod_1.z.boolean().optional(),
    settings: exports.zoomMeetingSettingsSchema.optional(),
});
exports.updateZoomMeetingSchema = exports.createZoomMeetingSchema.partial();
