import { z } from 'zod';
import { ValidationMessages as ValMsgs } from '../../i18n';

export const analyzeExpenseSchema = z.object({
  imageUrl: z.url({ error: ValMsgs.URL }),
});

export type AnalyzeExpenseRequest = z.infer<typeof analyzeExpenseSchema>;

export const removeReceiptImageSchema = z.object({
  expenseId: z.uuid({ error: ValMsgs.UUID }),
});

export type RemoveReceiptImageRequest = z.infer<
  typeof removeReceiptImageSchema
>;
