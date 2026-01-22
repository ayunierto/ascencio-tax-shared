"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sinSchema = exports.businessNumberSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const i18n_1 = require("../../i18n");
const zod_2 = require("../../utils/zod");
// Canadian Business Number format: 9 digits + 2 letters + 4 digits
exports.businessNumberSchema = zod_1.default
    .string()
    .regex(/^\d{9}[A-Za-z]{2}\d{4}$/, (0, zod_2.buildZodMessage)(i18n_1.ValidationMessages.INVALID_FORMAT));
// Validate regex: 123-456-789
exports.sinSchema = zod_1.default
    .string()
    .regex(/^\d{3}-\d{3}-\d{3}$/, (0, zod_2.buildZodMessage)(i18n_1.ValidationMessages.INVALID_FORMAT));
