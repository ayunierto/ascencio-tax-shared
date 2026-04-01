"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateExpenseSchema = exports.createExpenseSchema = exports.imageUrlSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const i18n_1 = require("../../i18n");
// Valida Cloudinary publicId (folders + filename, extensión opcional)
const cloudinaryPublicId = zod_1.default
    .string()
    .regex(/^[\w\-\/]+(\.[\w\-]+)?$/, 'invalid_public_id');
// Acepta URL o publicId
exports.imageUrlSchema = zod_1.default
    .union([zod_1.default.url({ error: i18n_1.ValidationMessages.URL }), cloudinaryPublicId])
    .optional();
const moneySchema = zod_1.default
    .union([zod_1.default.number(), zod_1.default.string()])
    .transform((value) => {
    if (typeof value === 'string') {
        return value.trim().replace(',', '.');
    }
    return value;
})
    .pipe(zod_1.default.coerce.number({ error: i18n_1.ValidationMessages.NUMBER }))
    .refine((val) => Number.isFinite(val), { error: i18n_1.ValidationMessages.NUMBER })
    .refine((val) => Math.abs(val * 100 - Math.round(val * 100)) < 1e-8, {
    error: i18n_1.ValidationMessages.NUMBER,
});
exports.createExpenseSchema = zod_1.default.object({
    id: zod_1.default.string().optional(),
    merchant: zod_1.default.string().nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
    date: zod_1.default.iso.datetime({ error: i18n_1.ValidationMessages.ISO_DATETIME }),
    total: moneySchema,
    tax: moneySchema,
    imageUrl: exports.imageUrlSchema,
    notes: zod_1.default.string().optional(),
    categoryId: zod_1.default
        .string({ error: i18n_1.ValidationMessages.REQUIRED })
        .nonempty({ error: i18n_1.ValidationMessages.REQUIRED })
        .pipe(zod_1.default.uuid({ error: i18n_1.ValidationMessages.UUID })),
    subcategoryId: zod_1.default.uuid({ error: i18n_1.ValidationMessages.UUID }).optional(),
});
exports.updateExpenseSchema = exports.createExpenseSchema.partial();
