import { z } from 'zod';
import { CommonMessages } from '../i18n';

export const categorySchema = z.object({
  name: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  description: z.string().optional(),
});

export type CreateCategoryRequest = z.infer<typeof categorySchema>;
export type UpdateCategoryRequest = Partial<CreateCategoryRequest>;
