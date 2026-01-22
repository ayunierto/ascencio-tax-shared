import z from 'zod';
export declare const createCompanySchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    legalName: z.ZodString;
    businessNumber: z.ZodString;
    payrollAccountNumber: z.ZodOptional<z.ZodString>;
    address: z.ZodString;
    city: z.ZodString;
    province: z.ZodString;
    postalCode: z.ZodString;
    phone: z.ZodString;
    email: z.ZodEmail;
    mediaToken: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateCompanyRequest = z.infer<typeof createCompanySchema>;
export declare const updateCompanySchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    name: z.ZodOptional<z.ZodString>;
    legalName: z.ZodOptional<z.ZodString>;
    businessNumber: z.ZodOptional<z.ZodString>;
    payrollAccountNumber: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    address: z.ZodOptional<z.ZodString>;
    city: z.ZodOptional<z.ZodString>;
    province: z.ZodOptional<z.ZodString>;
    postalCode: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodEmail>;
    mediaToken: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type UpdateCompanyRequest = z.infer<typeof updateCompanySchema>;
//# sourceMappingURL=companies.schema.d.ts.map