import z from 'zod';
import { emailSchema } from './common-auth.schemas';

export const forgotPasswordSchema = z.object({
  email: emailSchema,
});

export type ForgotPasswordRequest = z.infer<typeof forgotPasswordSchema>;
