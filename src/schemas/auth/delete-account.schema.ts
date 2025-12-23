import z from 'zod';
import { passwordSchema } from './common-auth.schemas';

export const deleteAccountSchema = z.object({
  password: passwordSchema,
});

export type DeleteAccountRequest = z.infer<typeof deleteAccountSchema>;
