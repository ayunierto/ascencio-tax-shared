"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateServiceSchema = exports.serviceSchema = void 0;
const zod_1 = require("zod");
const i18n_1 = require("../i18n");
exports.serviceSchema = zod_1.z.object({
    name: zod_1.z
        .string({ error: i18n_1.ValidationMessages.STRING })
        .min(3, { error: i18n_1.ValidationMessages.MIN_LENGTH }),
    description: zod_1.z.string().optional(),
    address: zod_1.z.string().optional(),
    durationMinutes: zod_1.z
        .number({ error: i18n_1.ValidationMessages.NUMBER })
        .int({ error: i18n_1.ValidationMessages.NUMBER })
        .optional(),
    isAvailableOnline: zod_1.z.boolean({
        error: i18n_1.ValidationMessages.BOOLEAN,
    }),
    // TODO: Remplace with actual Cloudinary URL validation if needed
    imageUrl: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional(),
    isActive: zod_1.z.boolean({ error: i18n_1.ValidationMessages.BOOLEAN }),
    staffIds: zod_1.z
        .array(zod_1.z.uuid({ error: i18n_1.ValidationMessages.UUID }), {
        error: i18n_1.ValidationMessages.REQUIRED,
    })
        .nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
});
exports.updateServiceSchema = exports.serviceSchema.partial();
