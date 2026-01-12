import z from 'zod';
import { ValidationMessages } from '../../i18n';

export const createCategorySchema = z.object({
  name: z
    .string({ error: ValidationMessages.STRING })
    .nonempty({ error: ValidationMessages.MIN_LENGTH }),
  description: z.string().optional(),
});

export type CreateCategoryRequest = z.infer<typeof createCategorySchema>;

export const updateCategorySchema = createCategorySchema.partial();

export type UpdateCategoryRequest = z.infer<typeof updateCategorySchema>;
