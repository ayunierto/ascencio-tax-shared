import z from 'zod';
export declare const createSubcategorySchema: z.ZodObject<{
    name: z.ZodString;
    categoryId: z.ZodUUID;
}, z.core.$strip>;
export type CreateSubcategoryRequest = z.infer<typeof createSubcategorySchema>;
export declare const updateSubcategorySchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodOptional<z.ZodUUID>;
}, z.core.$strip>;
export type UpdateSubcategoryRequest = z.infer<typeof updateSubcategorySchema>;
//# sourceMappingURL=subcategories.schema.d.ts.map