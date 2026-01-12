import z from 'zod';
import { emailSchema as email } from '../common.schemas';

export const resendEmailCodeSchema = z.object({
  email,
});

export type ResendEmailCodeRequest = z.infer<typeof resendEmailCodeSchema>;
