import { z } from 'zod';
import { LogsMessages } from '../i18n';

// Logs
export const createLogSchema = z.object({
  description: z
    .string({ error: LogsMessages.DESCRIPTION_REQUIRED })
    .min(1, { error: LogsMessages.DESCRIPTION_REQUIRED }),
});

export type CreateLogDto = z.infer<typeof createLogSchema>;
