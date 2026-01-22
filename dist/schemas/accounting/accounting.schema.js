"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeReceiptImageSchema = exports.analyzeExpenseSchema = void 0;
const zod_1 = require("zod");
const i18n_1 = require("../../i18n");
exports.analyzeExpenseSchema = zod_1.z.object({
    imageUrl: zod_1.z.url({ error: i18n_1.ValidationMessages.URL }),
});
exports.removeReceiptImageSchema = zod_1.z.object({
    expenseId: zod_1.z.uuid({ error: i18n_1.ValidationMessages.UUID }),
});
