"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateExpenseSchema = exports.createExpenseSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const i18n_1 = require("../../i18n");
exports.createExpenseSchema = zod_1.default.object({
    merchant: zod_1.default.string().nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
    date: zod_1.default.iso.datetime({ error: i18n_1.ValidationMessages.ISO_DATETIME }),
    total: zod_1.default
        .number({ error: i18n_1.ValidationMessages.NUMBER })
        .multipleOf(0.01, { error: i18n_1.ValidationMessages.NUMBER }),
    tax: zod_1.default
        .number({ error: i18n_1.ValidationMessages.NUMBER })
        .multipleOf(0.01, { error: i18n_1.ValidationMessages.NUMBER }),
    imageUrl: zod_1.default.url({ error: i18n_1.ValidationMessages.URL }).optional(),
    notes: zod_1.default.string().optional(),
    categoryId: zod_1.default.uuid({ error: i18n_1.ValidationMessages.UUID }),
    subcategoryId: zod_1.default.uuid({ error: i18n_1.ValidationMessages.UUID }).optional(),
});
exports.updateExpenseSchema = exports.createExpenseSchema.partial();
