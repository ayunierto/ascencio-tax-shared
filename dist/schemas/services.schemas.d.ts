import { z } from 'zod';
export declare const serviceSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
    durationMinutes: z.ZodOptional<z.ZodNumber>;
    isAvailableOnline: z.ZodBoolean;
    imageUrl: z.ZodOptional<z.ZodURL>;
    isActive: z.ZodBoolean;
    staffIds: z.ZodArray<z.ZodUUID>;
}, z.core.$strip>;
export type CreateServiceRequest = z.infer<typeof serviceSchema>;
export declare const updateServiceSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    address: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    durationMinutes: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    isAvailableOnline: z.ZodOptional<z.ZodBoolean>;
    imageUrl: z.ZodOptional<z.ZodOptional<z.ZodURL>>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    staffIds: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
}, z.core.$strip>;
export type UpdateServiceRequest = z.infer<typeof updateServiceSchema>;
//# sourceMappingURL=services.schemas.d.ts.map