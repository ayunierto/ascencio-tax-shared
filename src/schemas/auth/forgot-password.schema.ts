import z from 'zod';
import { emailSchema as email } from '../common.schemas';

export const forgotPasswordSchema = z.object({
  email,
});

export type ForgotPasswordRequest = z.infer<typeof forgotPasswordSchema>;
