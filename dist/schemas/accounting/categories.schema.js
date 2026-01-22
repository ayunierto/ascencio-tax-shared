"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategorySchema = exports.createCategorySchema = void 0;
const zod_1 = __importDefault(require("zod"));
const i18n_1 = require("../../i18n");
exports.createCategorySchema = zod_1.default.object({
    name: zod_1.default
        .string({ error: i18n_1.ValidationMessages.STRING })
        .nonempty({ error: i18n_1.ValidationMessages.MIN_LENGTH }),
    description: zod_1.default.string().optional(),
});
exports.updateCategorySchema = exports.createCategorySchema.partial();
