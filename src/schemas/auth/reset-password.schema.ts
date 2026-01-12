import z from 'zod';
import { passwordSchema, verificationCodeSchema } from './common-auth.schemas';
import { emailSchema as email } from '../common.schemas';

export const resetPasswordSchema = z.object({
  email,
  code: verificationCodeSchema,
  newPassword: passwordSchema,
});

export type ResetPasswordRequest = z.infer<typeof resetPasswordSchema>;
