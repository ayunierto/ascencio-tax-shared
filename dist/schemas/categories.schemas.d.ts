import { z } from 'zod';
export declare const categorySchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateCategoryRequest = z.infer<typeof categorySchema>;
export type UpdateCategoryRequest = Partial<CreateCategoryRequest>;
//# sourceMappingURL=categories.schemas.d.ts.map