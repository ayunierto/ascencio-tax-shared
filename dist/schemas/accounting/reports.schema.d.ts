import z from 'zod';
export declare const createReportSchema: z.ZodObject<{
    startDate: z.ZodDate;
    endDate: z.ZodDate;
}, z.core.$strip>;
export type CreateReportRequest = z.infer<typeof createReportSchema>;
export declare const updateReportSchema: z.ZodObject<{
    startDate: z.ZodOptional<z.ZodDate>;
    endDate: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export type UpdateReportRequest = z.infer<typeof updateReportSchema>;
//# sourceMappingURL=reports.schema.d.ts.map