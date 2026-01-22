import { z } from 'zod';
export declare const staffMemberSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    isActive: z.ZodBoolean;
    services: z.ZodOptional<z.ZodArray<z.ZodString>>;
    schedules: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type CreateStaffMemberRequest = z.infer<typeof staffMemberSchema>;
export declare const updateStaffMemberSchema: z.ZodObject<{
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    services: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    schedules: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
export type UpdateStaffMemberRequest = z.infer<typeof updateStaffMemberSchema>;
//# sourceMappingURL=staff-members.schemas.d.ts.map