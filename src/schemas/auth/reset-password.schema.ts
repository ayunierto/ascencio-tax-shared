import z from 'zod';
import {
  emailSchema,
  passwordSchema,
  verificationCodeSchema,
} from './common-auth.schemas';

export const resetPasswordSchema = z.object({
  email: emailSchema,
  code: verificationCodeSchema,
  newPassword: passwordSchema,
});

export type ResetPasswordRequest = z.infer<typeof resetPasswordSchema>;
