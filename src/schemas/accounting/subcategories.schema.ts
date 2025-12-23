import z from 'zod';
import { CommonMessages } from '../../i18n';

export const createSubcategorySchema = z.object({
  name: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  categoryId: z.uuid({ error: CommonMessages.VALIDATION_UUID }),
});

export type CreateSubcategoryRequest = z.infer<typeof createSubcategorySchema>;

export const updateSubcategorySchema = createSubcategorySchema.partial();

export type UpdateSubcategoryRequest = z.infer<typeof updateSubcategorySchema>;
