import { z } from 'zod';
export declare const analyzeExpenseSchema: z.ZodObject<{
    imageUrl: z.ZodURL;
}, z.core.$strip>;
export type AnalyzeExpenseRequest = z.infer<typeof analyzeExpenseSchema>;
export declare const removeReceiptImageSchema: z.ZodObject<{
    expenseId: z.ZodUUID;
}, z.core.$strip>;
export type RemoveReceiptImageRequest = z.infer<typeof removeReceiptImageSchema>;
//# sourceMappingURL=accounting.schema.d.ts.map