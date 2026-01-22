import z from 'zod';
export declare const changePasswordSchema: z.ZodObject<{
    currentPassword: z.ZodString;
    newPassword: z.ZodString;
}, z.core.$strip>;
export type ChangePasswordRequest = z.infer<typeof changePasswordSchema>;
//# sourceMappingURL=change-password.schema.d.ts.map