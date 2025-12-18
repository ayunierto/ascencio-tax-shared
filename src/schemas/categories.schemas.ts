import { z } from 'zod';

export const categorySchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
});

export type CreateCategoryDto = z.infer<typeof categorySchema>;
export type UpdateCategoryDto = Partial<CreateCategoryDto>;
