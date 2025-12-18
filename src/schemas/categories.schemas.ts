import { z } from 'zod';
import { CategoriesMessages } from '../i18n';

export const categorySchema = z.object({
  name: z
    .string({ error: CategoriesMessages.NAME_REQUIRED })
    .min(1, { error: CategoriesMessages.NAME_REQUIRED }),
  description: z.string().optional(),
});

export type CreateCategoryDto = z.infer<typeof categorySchema>;
export type UpdateCategoryDto = Partial<CreateCategoryDto>;
