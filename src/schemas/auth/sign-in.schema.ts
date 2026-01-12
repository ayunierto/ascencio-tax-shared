import z from 'zod';
import { passwordSchema } from './common-auth.schemas';
import { emailSchema as email } from '../common.schemas';

export const signInSchema = z.object({
  email,
  password: passwordSchema,
});

export type SignInRequest = z.infer<typeof signInSchema>;
