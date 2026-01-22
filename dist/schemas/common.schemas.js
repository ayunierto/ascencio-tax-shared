"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneNumberSchema = exports.countryCodeSchema = exports.emailSchema = exports.lastNameSchema = exports.firstNameSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const i18n_1 = require("../i18n");
const utils_1 = require("../utils");
exports.firstNameSchema = zod_1.default
    .string()
    .min(2, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.MIN_LENGTH, { min: 2 }))
    .max(50, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.MAX_LENGTH, { max: 50 }));
exports.lastNameSchema = zod_1.default
    .string()
    .min(2, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.MIN_LENGTH, { min: 2 }))
    .max(50, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.MAX_LENGTH, { max: 50 }));
exports.emailSchema = zod_1.default
    .email((0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.EMAIL))
    .nonempty((0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.REQUIRED));
exports.countryCodeSchema = zod_1.default
    .string()
    .min(1, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.MIN_LENGTH, { min: 1 }))
    .max(10, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.MAX_LENGTH, { max: 10 }));
exports.phoneNumberSchema = zod_1.default
    .string()
    .min(4, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.MIN_LENGTH, { min: 9 }))
    .max(15, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.MAX_LENGTH, { max: 10 }));
