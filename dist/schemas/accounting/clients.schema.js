"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClientSchema = exports.createClientSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const i18n_1 = require("../../i18n");
const common_schemas_1 = require("../common.schemas");
const utils_1 = require("../../utils");
const common_accounting_schemas_1 = require("./common-accounting.schemas");
exports.createClientSchema = zod_1.default.object({
    id: zod_1.default.string().optional(),
    // === Campos requeridos ===
    fullName: zod_1.default.string().min(1, (0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.REQUIRED)),
    email: common_schemas_1.emailSchema,
    phone: common_schemas_1.phoneNumberSchema,
    // === Campos opcionales de dirección ===
    address: zod_1.default.string().optional(),
    city: zod_1.default.string().trim().optional(),
    province: zod_1.default.string().optional(),
    postalCode: zod_1.default.string().optional(),
    country: zod_1.default.string().optional(),
    // === Campos opcionales para individuos ===
    sin: common_accounting_schemas_1.sinSchema.optional(),
    // === Campos opcionales para empresas ===
    businessNumber: common_accounting_schemas_1.businessNumberSchema.optional(),
});
exports.updateClientSchema = exports.createClientSchema.partial();
