"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordSchema = exports.verificationCodeSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const i18n_1 = require("../../i18n");
const utils_1 = require("../../utils");
exports.verificationCodeSchema = zod_1.default
    .string()
    .length(6, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.MIN_LENGTH, { min: 6 }))
    .max(6, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.MAX_LENGTH, { max: 6 }))
    .nonempty((0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.REQUIRED));
exports.passwordSchema = zod_1.default
    .string()
    .min(6, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.MIN_LENGTH, { min: 6 }))
    .max(100, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.MAX_LENGTH, { max: 100 }));
