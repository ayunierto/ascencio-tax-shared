import z from 'zod';
export declare const signUpSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodEmail;
    countryCode: z.ZodOptional<z.ZodString>;
    phoneNumber: z.ZodOptional<z.ZodString>;
    timeZone: z.ZodString;
    locale: z.ZodOptional<z.ZodString>;
    password: z.ZodString;
}, z.core.$strip>;
export type SignUpRequest = z.infer<typeof signUpSchema>;
//# sourceMappingURL=sign-up.schema.d.ts.map