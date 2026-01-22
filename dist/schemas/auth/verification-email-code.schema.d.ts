import z from 'zod';
export declare const verifyEmailCodeSchema: z.ZodObject<{
    email: z.ZodEmail;
    code: z.ZodString;
}, z.core.$strip>;
export type VerifyEmailCodeRequest = z.infer<typeof verifyEmailCodeSchema>;
//# sourceMappingURL=verification-email-code.schema.d.ts.map