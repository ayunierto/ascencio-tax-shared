import { z } from 'zod';

export const signInSchema = z.object({
  email: z.email().nonempty(),
  password: z.string().min(6).nonempty(),
});

export type SignInDto = z.infer<typeof signInSchema>;

export const signUpSchema = z.object({
  firstName: z.string().min(3).nonempty(),
  lastName: z.string().min(3).nonempty(),
  email: z.email().nonempty(),
  countryCode: z.string().optional(),
  phoneNumber: z.string().optional(),
  timeZone: z.string().nonempty(),
  locale: z.string().optional(),
  password: z.string().min(6).nonempty(),
  confirmPassword: z.string().min(6).nonempty(),
});

export type SignUpDto = z.infer<typeof signUpSchema>;

export const verifyEmailCodeSchema = z.object({
  code: z.string().length(6).nonempty(),
});

export type VerifyEmailCodeDto = z.infer<typeof verifyEmailCodeSchema>;
