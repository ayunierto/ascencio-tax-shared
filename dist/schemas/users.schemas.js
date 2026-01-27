"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfileSchema = exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
const i18n_1 = require("../i18n");
const common_schemas_1 = require("./common.schemas");
const auth_1 = require("./auth");
// Users
exports.createUserSchema = zod_1.z.object({
    firstName: common_schemas_1.firstNameSchema,
    lastName: common_schemas_1.lastNameSchema,
    email: common_schemas_1.emailSchema,
    countryCode: common_schemas_1.countryCodeSchema,
    phoneNumber: common_schemas_1.phoneNumberSchema,
    locale: zod_1.z.string().optional(),
    password: auth_1.passwordSchema,
    roles: zod_1.z.array(zod_1.z.string(), { error: i18n_1.ValidationMessages.ARRAY }).optional(),
    isActive: zod_1.z.boolean({ error: i18n_1.ValidationMessages.BOOLEAN }).optional(),
});
exports.updateUserSchema = exports.createUserSchema.partial();
exports.updateProfileSchema = zod_1.z.object({
    firstName: common_schemas_1.firstNameSchema,
    lastName: common_schemas_1.lastNameSchema,
    countryCode: common_schemas_1.countryCodeSchema.optional(),
    phoneNumber: common_schemas_1.phoneNumberSchema.optional(),
    password: auth_1.passwordSchema.optional(),
});
