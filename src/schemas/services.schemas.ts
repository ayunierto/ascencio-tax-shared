import { z } from 'zod';

export const serviceSchema = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
  address: z.string().optional(),
  durationMinutes: z.number().int().optional(),
  isAvailableOnline: z.boolean(),
  imageUrl: z.string().url().optional(),
  isActive: z.boolean(),
  staffIds: z.array(z.string().uuid()).nonempty(),
});

export type CreateServiceDto = z.infer<typeof serviceSchema>;
export type UpdateServiceDto = Partial<CreateServiceDto>;
