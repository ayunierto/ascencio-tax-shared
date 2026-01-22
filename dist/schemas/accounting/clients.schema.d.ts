import z from 'zod';
export declare const createClientSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    fullName: z.ZodString;
    email: z.ZodEmail;
    phone: z.ZodString;
    address: z.ZodOptional<z.ZodString>;
    city: z.ZodOptional<z.ZodString>;
    province: z.ZodOptional<z.ZodString>;
    postalCode: z.ZodOptional<z.ZodString>;
    country: z.ZodOptional<z.ZodString>;
    sin: z.ZodOptional<z.ZodString>;
    businessNumber: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateClientRequest = z.infer<typeof createClientSchema>;
export declare const updateClientSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    fullName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodEmail>;
    phone: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    city: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    province: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    postalCode: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    country: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    sin: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    businessNumber: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type UpdateClientRequest = z.infer<typeof updateClientSchema>;
//# sourceMappingURL=clients.schema.d.ts.map