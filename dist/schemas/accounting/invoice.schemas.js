"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.issueInvoiceSchema = exports.createInvoicePaymentSchema = exports.updateInvoiceSchema = exports.createInvoiceSchema = exports.invoiceLineItemSchema = void 0;
const zod_1 = require("zod");
const interfaces_1 = require("../../interfaces");
const i18n_1 = require("../../i18n");
// Schema for individual line items in an invoice
exports.invoiceLineItemSchema = zod_1.z.object({
    description: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }),
    quantity: zod_1.z.coerce
        .number({ error: i18n_1.ValidationMessages.NUMBER })
        .positive({ error: i18n_1.ValidationMessages.POSITIVE }),
    price: zod_1.z.coerce
        .number({ error: i18n_1.ValidationMessages.NUMBER })
        .nonnegative({ error: i18n_1.ValidationMessages.NON_NEGATIVE }),
});
exports.createInvoiceSchema = zod_1.z
    .object({
    // From Company (optional in UI - backend auto-creates "Sole Proprietor" if empty)
    fromCompanyId: zod_1.z
        .union([zod_1.z.uuid({ error: i18n_1.ValidationMessages.UUID }), zod_1.z.literal(''), zod_1.z.undefined()])
        .transform((val) => (val === '' || !val ? undefined : val))
        .optional(),
    // Client relation (optional)
    billToClientId: zod_1.z
        .union([zod_1.z.uuid({ error: i18n_1.ValidationMessages.UUID }), zod_1.z.literal(''), zod_1.z.undefined()])
        .transform((val) => (val === '' ? undefined : val))
        .optional(),
    // Inline client data (used when billToClientId is not provided)
    billToFullName: zod_1.z
        .union([
        zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).min(1, { error: i18n_1.ValidationMessages.REQUIRED }),
        zod_1.z.literal(''),
        zod_1.z.undefined(),
    ])
        .transform((val) => (val === '' ? undefined : val))
        .optional(),
    billToEmail: zod_1.z
        .union([
        zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).email({ error: i18n_1.ValidationMessages.EMAIL }),
        zod_1.z.literal(''),
        zod_1.z.undefined(),
    ])
        .transform((val) => (val === '' ? undefined : val))
        .optional(),
    billToPhone: zod_1.z
        .union([
        zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }),
        zod_1.z.literal(''),
        zod_1.z.undefined(),
    ])
        .transform((val) => (val === '' ? undefined : val))
        .optional(),
    billToAddress: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional(),
    billToCity: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional(),
    billToProvince: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional(),
    billToPostalCode: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional(),
    billToCountry: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional(),
    billToSIN: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional(),
    billToBusinessNumber: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional(),
    // Invoice details
    issueDate: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }), //
    dueDate: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }),
    taxRate: zod_1.z.coerce.number({ error: i18n_1.ValidationMessages.NUMBER }).default(13),
    notes: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional().or(zod_1.z.literal('')),
    logoUrl: zod_1.z
        .union([zod_1.z.url({ error: i18n_1.ValidationMessages.URL }), zod_1.z.literal(''), zod_1.z.undefined()])
        .optional(),
    lineItems: zod_1.z
        .array(exports.invoiceLineItemSchema, { error: i18n_1.ValidationMessages.ARRAY })
        .min(1, { error: i18n_1.ValidationMessages.MIN_ITEMS }),
    status: zod_1.z
        .enum(interfaces_1.InvoiceStatus, { error: i18n_1.ValidationMessages.INVALID_ENUM })
        .default('draft'),
})
    .superRefine((data, ctx) => {
    // Si hay billToClientId, no validamos nada más
    if (data.billToClientId)
        return;
    // Si NO hay billToClientId, estos campos son obligatorios
    if (!data.billToFullName) {
        ctx.addIssue({
            path: ['billToFullName'],
            message: i18n_1.ValidationMessages.REQUIRED,
            code: 'custom',
        });
    }
    if (!data.billToEmail) {
        ctx.addIssue({
            path: ['billToEmail'],
            message: i18n_1.ValidationMessages.REQUIRED,
            code: 'custom',
        });
    }
    if (!data.billToPhone) {
        ctx.addIssue({
            path: ['billToPhone'],
            message: i18n_1.ValidationMessages.REQUIRED,
            code: 'custom',
        });
    }
});
// Cannot use .partial() on schemas with .refine(), so we define it manually
exports.updateInvoiceSchema = zod_1.z.object({
    // From Company (optional in UI - backend auto-creates "Sole Proprietor" if empty)
    fromCompanyId: zod_1.z
        .union([zod_1.z.uuid({ error: i18n_1.ValidationMessages.UUID }), zod_1.z.literal(''), zod_1.z.undefined()])
        .transform((val) => (val === '' || !val ? undefined : val))
        .optional(),
    // Client relation (optional)
    billToClientId: zod_1.z
        .union([zod_1.z.uuid({ error: i18n_1.ValidationMessages.UUID }), zod_1.z.literal(''), zod_1.z.undefined()])
        .transform((val) => (val === '' ? undefined : val))
        .optional(),
    billToFullName: zod_1.z
        .union([
        zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).min(1, { error: i18n_1.ValidationMessages.REQUIRED }),
        zod_1.z.literal(''),
        zod_1.z.undefined(),
    ])
        .optional(),
    billToEmail: zod_1.z
        .union([
        zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).email({ error: i18n_1.ValidationMessages.EMAIL }),
        zod_1.z.literal(''),
        zod_1.z.undefined(),
    ])
        .optional(),
    billToPhone: zod_1.z
        .union([zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }), zod_1.z.literal(''), zod_1.z.undefined()])
        .optional(),
    billToAddress: zod_1.z
        .union([zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }), zod_1.z.literal(''), zod_1.z.undefined()])
        .optional(),
    billToCity: zod_1.z
        .union([zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }), zod_1.z.literal(''), zod_1.z.undefined()])
        .optional(),
    billToProvince: zod_1.z
        .union([zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }), zod_1.z.literal(''), zod_1.z.undefined()])
        .optional(),
    billToPostalCode: zod_1.z
        .union([zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }), zod_1.z.literal(''), zod_1.z.undefined()])
        .optional(),
    billToCountry: zod_1.z
        .union([zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }), zod_1.z.literal(''), zod_1.z.undefined()])
        .optional(),
    issueDate: zod_1.z
        .union([zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }), zod_1.z.undefined()])
        .optional(),
    dueDate: zod_1.z
        .union([zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }), zod_1.z.undefined()])
        .optional(),
    taxRate: zod_1.z
        .union([zod_1.z.number({ error: i18n_1.ValidationMessages.NUMBER }), zod_1.z.undefined()])
        .optional(),
    notes: zod_1.z
        .union([zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }), zod_1.z.literal(''), zod_1.z.undefined()])
        .optional(),
    logoUrl: zod_1.z
        .union([
        zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).url({ error: i18n_1.ValidationMessages.URL }),
        zod_1.z.literal(''),
        zod_1.z.undefined(),
    ])
        .optional(),
    lineItems: zod_1.z
        .union([
        zod_1.z
            .array(exports.invoiceLineItemSchema, { error: i18n_1.ValidationMessages.ARRAY })
            .min(1, { error: i18n_1.ValidationMessages.MIN_ITEMS }),
        zod_1.z.undefined(),
    ])
        .optional(),
    status: zod_1.z
        .union([
        zod_1.z.enum(interfaces_1.InvoiceStatus, { error: i18n_1.ValidationMessages.INVALID_ENUM }),
        zod_1.z.undefined(),
    ])
        .optional(),
});
exports.createInvoicePaymentSchema = zod_1.z.object({
    amount: zod_1.z.coerce.number().positive(),
    paidAt: zod_1.z.string(),
    method: zod_1.z.string().optional(),
    reference: zod_1.z.string().optional(),
    note: zod_1.z.string().optional(),
});
/** Schema for issuing an invoice (draft -> issued) */
exports.issueInvoiceSchema = zod_1.z.object({
    issueDate: zod_1.z.string({ error: i18n_1.ValidationMessages.DATE }).optional(), // If not provided, use current date
});
