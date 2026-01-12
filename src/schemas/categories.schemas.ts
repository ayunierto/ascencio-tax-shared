import { z } from 'zod';
import { ValidationMessages } from '../i18n';

export const categorySchema = z.object({
  name: z
    .string({ error: ValidationMessages.STRING })
    .nonempty({ error: ValidationMessages.REQUIRED }),
  description: z.string().optional(),
});

export type CreateCategoryRequest = z.infer<typeof categorySchema>;
export type UpdateCategoryRequest = Partial<CreateCategoryRequest>;
