import { z } from 'zod';
import { ValidationMessages as ValMsgs } from '../i18n';

export const createLogSchema = z.object({
  description: z
    .string({ error: ValMsgs.STRING })
    .nonempty({ error: ValMsgs.REQUIRED }),
});

export type CreateLogRequest = z.infer<typeof createLogSchema>;
