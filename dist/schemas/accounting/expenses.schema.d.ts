import z from 'zod';
export declare const createExpenseSchema: z.ZodObject<{
    merchant: z.ZodString;
    date: z.ZodISODateTime;
    total: z.ZodNumber;
    tax: z.ZodNumber;
    imageUrl: z.ZodOptional<z.ZodURL>;
    notes: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodUUID;
    subcategoryId: z.ZodOptional<z.ZodUUID>;
}, z.core.$strip>;
export type CreateExpenseRequest = z.infer<typeof createExpenseSchema>;
export declare const updateExpenseSchema: z.ZodObject<{
    merchant: z.ZodOptional<z.ZodString>;
    date: z.ZodOptional<z.ZodISODateTime>;
    total: z.ZodOptional<z.ZodNumber>;
    tax: z.ZodOptional<z.ZodNumber>;
    imageUrl: z.ZodOptional<z.ZodOptional<z.ZodURL>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    categoryId: z.ZodOptional<z.ZodUUID>;
    subcategoryId: z.ZodOptional<z.ZodOptional<z.ZodUUID>>;
}, z.core.$strip>;
export type UpdateExpenseRequest = z.infer<typeof updateExpenseSchema>;
//# sourceMappingURL=expenses.schema.d.ts.map