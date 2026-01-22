"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaymentSchema = void 0;
const zod_1 = require("zod");
const i18n_1 = require("../../i18n");
const interfaces_1 = require("../../interfaces");
exports.createPaymentSchema = zod_1.z.object({
    accountReceivableId: zod_1.z.uuid({ error: i18n_1.ValidationMessages.UUID }),
    amount: zod_1.z
        .number({ error: i18n_1.ValidationMessages.NUMBER })
        .positive({ error: i18n_1.ValidationMessages.POSITIVE }),
    paymentDate: zod_1.z.string({ error: i18n_1.ValidationMessages.DATE }),
    paymentMethod: zod_1.z.enum(interfaces_1.PaymentMethod, { error: i18n_1.ValidationMessages.INVALID_ENUM }),
    reference: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional(),
    notes: zod_1.z.string({ error: i18n_1.ValidationMessages.STRING }).optional(),
});
