import z from 'zod';
import { passwordSchema } from './common-auth.schemas';

export const changePasswordSchema = z.object({
  currentPassword: passwordSchema,
  newPassword: passwordSchema,
});

export type ChangePasswordRequest = z.infer<typeof changePasswordSchema>;
