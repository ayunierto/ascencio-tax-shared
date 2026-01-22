"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPasswordSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const common_schemas_1 = require("../common.schemas");
exports.forgotPasswordSchema = zod_1.default.object({
    email: common_schemas_1.emailSchema,
});
