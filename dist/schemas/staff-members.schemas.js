"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStaffMemberSchema = exports.staffMemberSchema = void 0;
const zod_1 = require("zod");
const i18n_1 = require("../i18n");
// Staff Members
exports.staffMemberSchema = zod_1.z.object({
    firstName: zod_1.z
        .string({ error: i18n_1.ValidationMessages.STRING })
        .min(3, { error: i18n_1.ValidationMessages.MIN_LENGTH }),
    lastName: zod_1.z
        .string({ error: i18n_1.ValidationMessages.STRING })
        .min(3, { error: i18n_1.ValidationMessages.MIN_LENGTH }),
    isActive: zod_1.z.boolean({ error: i18n_1.ValidationMessages.BOOLEAN }),
    services: zod_1.z.array(zod_1.z.string()).optional(),
    schedules: zod_1.z.array(zod_1.z.string()).optional(),
});
exports.updateStaffMemberSchema = exports.staffMemberSchema.partial();
