import { z } from 'zod';

// Logs
export const createLogSchema = z.object({
  description: z.string().min(1),
});

export type CreateLogDto = z.infer<typeof createLogSchema>;
