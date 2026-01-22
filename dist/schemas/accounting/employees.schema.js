"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmployeeSchema = exports.createEmployeeSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const i18n_1 = require("../../i18n");
const common_schemas_1 = require("../common.schemas");
const utils_1 = require("../../utils");
const common_accounting_schemas_1 = require("./common-accounting.schemas");
exports.createEmployeeSchema = zod_1.default.object({
    id: zod_1.default.string().optional(),
    companyId: zod_1.default.uuid().optional().nullable(),
    firstName: zod_1.default.string().min(1, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.REQUIRED)),
    lastName: zod_1.default.string().min(1, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.REQUIRED)),
    email: common_schemas_1.emailSchema.optional().or(zod_1.default.literal('')),
    phone: common_schemas_1.phoneNumberSchema.optional().or(zod_1.default.literal('')),
    address: zod_1.default.string().optional(),
    city: zod_1.default.string().optional(),
    province: zod_1.default.string().optional(),
    postalCode: zod_1.default.string().optional(),
    position: zod_1.default.string().optional(),
    hourlyRate: zod_1.default.number().min(0).optional().nullable(),
    salary: zod_1.default.number().min(0).optional().nullable(),
    sin: common_accounting_schemas_1.sinSchema.optional(), // Social Insurance Number
    startDate: zod_1.default.string().optional().nullable(),
    endDate: zod_1.default.string().optional().nullable(),
    isActive: zod_1.default.boolean().default(true),
    notes: zod_1.default.string().optional(),
});
exports.updateEmployeeSchema = exports.createEmployeeSchema.partial().extend({
    id: zod_1.default.uuid(),
});
