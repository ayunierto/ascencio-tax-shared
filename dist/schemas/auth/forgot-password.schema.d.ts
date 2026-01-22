import z from 'zod';
export declare const forgotPasswordSchema: z.ZodObject<{
    email: z.ZodEmail;
}, z.core.$strip>;
export type ForgotPasswordRequest = z.infer<typeof forgotPasswordSchema>;
//# sourceMappingURL=forgot-password.schema.d.ts.map