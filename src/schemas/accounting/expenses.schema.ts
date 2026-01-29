import z from 'zod';
import { ValidationMessages as ValMsgs } from '../../i18n';

export const createExpenseSchema = z.object({
  merchant: z.string().nonempty({ error: ValMsgs.REQUIRED }),
  date: z.iso.datetime({ error: ValMsgs.ISO_DATETIME }),
  total: z
    .number({ error: ValMsgs.NUMBER })
    .multipleOf(0.01, { error: ValMsgs.NUMBER }),
  tax: z
    .number({ error: ValMsgs.NUMBER })
    .multipleOf(0.01, { error: ValMsgs.NUMBER }),
  imageUrl: z.url({ error: ValMsgs.URL }).optional(),
  notes: z.string().optional(),
  categoryId: z
    .string({ error: ValMsgs.REQUIRED })
    .pipe(z.uuid({ error: ValMsgs.UUID })),
  subcategoryId: z.uuid({ error: ValMsgs.UUID }).optional(),
});

export type CreateExpenseRequest = z.infer<typeof createExpenseSchema>;

export const updateExpenseSchema = createExpenseSchema.partial();

export type UpdateExpenseRequest = z.infer<typeof updateExpenseSchema>;
