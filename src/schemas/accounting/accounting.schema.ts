import { z } from 'zod';
import { CommonMessages } from '../../i18n';

export const analyzeExpenseSchema = z.object({
  imageUrl: z.url({ error: CommonMessages.VALIDATION_URL }),
});

export type AnalyzeExpenseRequest = z.infer<typeof analyzeExpenseSchema>;

export const removeReceiptImageSchema = z.object({
  expenseId: z.uuid({ error: CommonMessages.VALIDATION_UUID }),
});

export type RemoveReceiptImageRequest = z.infer<
  typeof removeReceiptImageSchema
>;
