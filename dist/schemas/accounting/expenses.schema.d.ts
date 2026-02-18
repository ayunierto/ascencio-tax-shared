import z from 'zod';
export declare const imageUrlSchema: z.ZodOptional<z.ZodUnion<readonly [z.ZodURL, z.ZodString]>>;
export declare const createExpenseSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    merchant: z.ZodString;
    date: z.ZodISODateTime;
    total: z.ZodPipe<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodCoercedNumber<string | number>>;
    tax: z.ZodPipe<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodCoercedNumber<string | number>>;
    imageUrl: z.ZodOptional<z.ZodUnion<readonly [z.ZodURL, z.ZodString]>>;
    notes: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodPipe<z.ZodString, z.ZodUUID>;
    subcategoryId: z.ZodOptional<z.ZodUUID>;
}, z.core.$strip>;
export type CreateExpenseInput = z.input<typeof createExpenseSchema>;
export type CreateExpenseRequest = z.output<typeof createExpenseSchema>;
export declare const updateExpenseSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    merchant: z.ZodOptional<z.ZodString>;
    date: z.ZodOptional<z.ZodISODateTime>;
    total: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodCoercedNumber<string | number>>>;
    tax: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodCoercedNumber<string | number>>>;
    imageUrl: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodURL, z.ZodString]>>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    categoryId: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodUUID>>;
    subcategoryId: z.ZodOptional<z.ZodOptional<z.ZodUUID>>;
}, z.core.$strip>;
export type UpdateExpenseRequest = z.infer<typeof updateExpenseSchema>;
//# sourceMappingURL=expenses.schema.d.ts.map