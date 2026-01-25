import z from "zod";
export declare const createCompanySchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    legalName: any;
    businessNumber: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>;
    payrollAccountNumber: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>;
    city: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>;
    province: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>;
    postalCode: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>;
    phone: z.ZodString;
    email: z.ZodEmail;
    mediaToken: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateCompanyRequest = z.infer<typeof createCompanySchema>;
export declare const updateCompanySchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    name: z.ZodOptional<z.ZodString>;
    legalName: z.ZodOptional<any>;
    businessNumber: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>>;
    payrollAccountNumber: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    address: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>>;
    city: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>>;
    province: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>>;
    postalCode: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>>;
    phone: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodEmail>;
    mediaToken: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type UpdateCompanyRequest = z.infer<typeof updateCompanySchema>;
//# sourceMappingURL=companies.schema.d.ts.map