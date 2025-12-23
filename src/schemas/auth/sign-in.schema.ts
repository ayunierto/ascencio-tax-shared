import z from 'zod';
import { emailSchema, passwordSchema } from './common-auth.schemas';

export const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type SignInRequest = z.infer<typeof signInSchema>;
