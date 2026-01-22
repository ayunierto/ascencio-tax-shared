"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const common_auth_schemas_1 = require("./common-auth.schemas");
exports.changePasswordSchema = zod_1.default.object({
    currentPassword: common_auth_schemas_1.passwordSchema,
    newPassword: common_auth_schemas_1.passwordSchema,
});
