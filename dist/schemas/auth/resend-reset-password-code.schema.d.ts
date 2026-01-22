import z from 'zod';
export declare const resendResetPasswordCodeSchema: z.ZodObject<{
    email: z.ZodEmail;
}, z.core.$strip>;
export type ResendResetPasswordCodeRequest = z.infer<typeof resendResetPasswordCodeSchema>;
//# sourceMappingURL=resend-reset-password-code.schema.d.ts.map