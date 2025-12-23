import z from 'zod';
import { emailSchema } from './common-auth.schemas';

export const resendEmailCodeSchema = z.object({
  email: emailSchema,
});

export type ResendEmailCodeRequest = z.infer<typeof resendEmailCodeSchema>;
