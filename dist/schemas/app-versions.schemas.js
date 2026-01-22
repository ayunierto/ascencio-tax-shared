"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAppVersionSchema = exports.createAppVersionSchema = exports.appPlatformEnum = void 0;
const zod_1 = require("zod");
const i18n_1 = require("../i18n");
exports.appPlatformEnum = zod_1.z.enum(['IOS', 'ANDROID', 'WEB'], {
    error: i18n_1.ValidationMessages.INVALID_ENUM,
});
exports.createAppVersionSchema = zod_1.z.object({
    platform: exports.appPlatformEnum,
    minSupportedVersion: zod_1.z
        .number({ error: i18n_1.ValidationMessages.NUMBER })
        .min(1, { error: i18n_1.ValidationMessages.MIN_VALUE }),
    latestVersion: zod_1.z
        .string({ error: i18n_1.ValidationMessages.REQUIRED })
        .min(1, { error: i18n_1.ValidationMessages.MIN_LENGTH }),
    forceUpdate: zod_1.z.boolean({ error: i18n_1.ValidationMessages.BOOLEAN }),
    releaseNotes: zod_1.z.string().optional(),
});
exports.updateAppVersionSchema = exports.createAppVersionSchema.partial();
