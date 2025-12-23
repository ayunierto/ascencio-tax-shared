import z from 'zod';
import { CommonMessages } from '../../i18n';

export const createExpenseSchema = z.object({
  merchant: z.string().nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  date: z.iso.datetime({ error: CommonMessages.VALIDATION_ISO_DATETIME }),
  total: z
    .number({ error: CommonMessages.VALIDATION_NUMBER })
    .multipleOf(0.01, { error: CommonMessages.VALIDATION_NUMBER }),
  tax: z
    .number({ error: CommonMessages.VALIDATION_NUMBER })
    .multipleOf(0.01, { error: CommonMessages.VALIDATION_NUMBER }),
  imageUrl: z.url({ error: CommonMessages.VALIDATION_URL }).optional(),
  notes: z.string().optional(),
  categoryId: z.uuid({ error: CommonMessages.VALIDATION_UUID }),
  subcategoryId: z.uuid({ error: CommonMessages.VALIDATION_UUID }).optional(),
});

export type CreateExpenseRequest = z.infer<typeof createExpenseSchema>;

export const updateExpenseSchema = createExpenseSchema.partial();

export type UpdateExpenseRequest = z.infer<typeof updateExpenseSchema>;
