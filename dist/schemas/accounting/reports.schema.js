"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReportSchema = exports.createReportSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const i18n_1 = require("../../i18n");
exports.createReportSchema = zod_1.default.object({
    startDate: zod_1.default.date({ error: i18n_1.ValidationMessages.DATE }),
    endDate: zod_1.default.date({ error: i18n_1.ValidationMessages.DATE }),
});
exports.updateReportSchema = exports.createReportSchema.partial();
