"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSystemSettingSchema = exports.createSystemSettingSchema = void 0;
const zod_1 = require("zod");
const i18n_1 = require("../i18n");
// System Settings
exports.createSystemSettingSchema = zod_1.z.object({
    key: zod_1.z
        .string({ error: i18n_1.ValidationMessages.STRING })
        .nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
    value: zod_1.z
        .string({ error: i18n_1.ValidationMessages.STRING })
        .nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
    type: zod_1.z
        .string({ error: i18n_1.ValidationMessages.STRING })
        .nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
});
exports.updateSystemSettingSchema = exports.createSystemSettingSchema.partial();
