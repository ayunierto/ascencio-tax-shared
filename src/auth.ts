import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().min(6).nonempty(),
});

export type SignInDto = z.infer<typeof signInSchema>;
