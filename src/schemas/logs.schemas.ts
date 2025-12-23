import { z } from 'zod';
import { CommonMessages } from '../i18n';

export const createLogSchema = z.object({
  description: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
});

export type CreateLogRequest = z.infer<typeof createLogSchema>;
