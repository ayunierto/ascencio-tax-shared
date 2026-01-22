import z from 'zod';
export declare const resendEmailCodeSchema: z.ZodObject<{
    email: z.ZodEmail;
}, z.core.$strip>;
export type ResendEmailCodeRequest = z.infer<typeof resendEmailCodeSchema>;
//# sourceMappingURL=resend-email-code.schema.d.ts.map