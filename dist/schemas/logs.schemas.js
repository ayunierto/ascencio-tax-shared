"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogSchema = void 0;
const zod_1 = require("zod");
const i18n_1 = require("../i18n");
exports.createLogSchema = zod_1.z.object({
    description: zod_1.z
        .string({ error: i18n_1.ValidationMessages.STRING })
        .nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
});
