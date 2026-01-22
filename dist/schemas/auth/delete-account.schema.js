"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAccountSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const common_auth_schemas_1 = require("./common-auth.schemas");
exports.deleteAccountSchema = zod_1.default.object({
    password: common_auth_schemas_1.passwordSchema,
});
