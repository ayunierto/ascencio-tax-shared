"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCompanySchema = exports.createCompanySchema = void 0;
const zod_1 = __importDefault(require("zod"));
const i18n_1 = require("../../i18n");
const common_schemas_1 = require("../common.schemas");
const common_schemas_2 = require("../common.schemas");
const utils_1 = require("../../utils");
const common_accounting_schemas_1 = require("./common-accounting.schemas");
exports.createCompanySchema = zod_1.default.object({
    id: zod_1.default.string().optional(),
    name: zod_1.default
        .union([zod_1.default.string().min(1, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.REQUIRED)), zod_1.default.literal("")])
        .optional(),
    legalName: zod_1.default
        .union([zod_1.default.string().min(1, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.REQUIRED)), zod_1.default.literal("")])
        .optional(),
    businessNumber: zod_1.default.union([common_accounting_schemas_1.businessNumberSchema, zod_1.default.literal("")]).optional(),
    payrollAccountNumber: zod_1.default.string().optional(),
    address: zod_1.default
        .union([zod_1.default.string().min(1, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.REQUIRED)), zod_1.default.literal("")])
        .optional(),
    city: zod_1.default
        .union([
        zod_1.default.string().trim().min(1, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.REQUIRED)),
        zod_1.default.literal(""),
    ])
        .optional(),
    province: zod_1.default
        .union([zod_1.default.string().min(1, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.REQUIRED)), zod_1.default.literal("")])
        .optional(),
    postalCode: zod_1.default
        .union([zod_1.default.string().min(1, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.REQUIRED)), zod_1.default.literal("")])
        .optional(),
    phone: zod_1.default.union([common_schemas_2.phoneNumberSchema, zod_1.default.literal("")]).optional(),
    email: zod_1.default.union([common_schemas_1.emailSchema, zod_1.default.literal("")]).optional(),
    mediaToken: zod_1.default.string().optional(),
});
exports.updateCompanySchema = exports.createCompanySchema.partial();
