"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const i18n_1 = require("../../i18n");
const common_auth_schemas_1 = require("./common-auth.schemas");
const common_schemas_1 = require("../common.schemas");
const utils_1 = require("../../utils");
exports.signUpSchema = zod_1.default.object({
    firstName: common_schemas_1.firstNameSchema,
    lastName: common_schemas_1.lastNameSchema,
    email: common_schemas_1.emailSchema,
    countryCode: zod_1.default.string().optional(),
    phoneNumber: zod_1.default.string().optional(),
    timeZone: zod_1.default.string().nonempty((0, utils_1.buildZodMessage)(i18n_1.ValidationMessages.REQUIRED)),
    locale: zod_1.default.string().optional(),
    password: common_auth_schemas_1.passwordSchema,
});
