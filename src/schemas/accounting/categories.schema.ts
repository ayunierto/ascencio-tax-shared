import z from 'zod';
import { CommonMessages } from '../../i18n';

export const createCategorySchema = z.object({
  name: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .nonempty({ error: CommonMessages.VALIDATION_MIN_LENGTH }),
  description: z.string().optional(),
});

export type CreateCategoryRequest = z.infer<typeof createCategorySchema>;

export const updateCategorySchema = createCategorySchema.partial();

export type UpdateCategoryRequest = z.infer<typeof updateCategorySchema>;
