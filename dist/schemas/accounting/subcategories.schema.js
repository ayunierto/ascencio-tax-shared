"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSubcategorySchema = exports.createSubcategorySchema = void 0;
const zod_1 = __importDefault(require("zod"));
const i18n_1 = require("../../i18n");
exports.createSubcategorySchema = zod_1.default.object({
    name: zod_1.default
        .string({ error: i18n_1.ValidationMessages.STRING })
        .nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
    categoryId: zod_1.default.uuid({ error: i18n_1.ValidationMessages.UUID }),
});
exports.updateSubcategorySchema = exports.createSubcategorySchema.partial();
