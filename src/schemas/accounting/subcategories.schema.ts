import z from 'zod';
import { ValidationMessages } from '../../i18n';

export const createSubcategorySchema = z.object({
  name: z
    .string({ error: ValidationMessages.STRING })
    .nonempty({ error: ValidationMessages.REQUIRED }),
  categoryId: z.uuid({ error: ValidationMessages.UUID }),
});

export type CreateSubcategoryRequest = z.infer<typeof createSubcategorySchema>;

export const updateSubcategorySchema = createSubcategorySchema.partial();

export type UpdateSubcategoryRequest = z.infer<typeof updateSubcategorySchema>;
