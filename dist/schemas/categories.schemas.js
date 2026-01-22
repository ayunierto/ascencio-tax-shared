"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySchema = void 0;
const zod_1 = require("zod");
const i18n_1 = require("../i18n");
exports.categorySchema = zod_1.z.object({
    name: zod_1.z
        .string({ error: i18n_1.ValidationMessages.STRING })
        .nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
    description: zod_1.z.string().optional(),
});
