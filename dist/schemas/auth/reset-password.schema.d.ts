import z from 'zod';
export declare const resetPasswordSchema: z.ZodObject<{
    email: z.ZodEmail;
    code: z.ZodString;
    newPassword: z.ZodString;
}, z.core.$strip>;
export type ResetPasswordRequest = z.infer<typeof resetPasswordSchema>;
//# sourceMappingURL=reset-password.schema.d.ts.map