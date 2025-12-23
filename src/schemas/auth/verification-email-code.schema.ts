import z from 'zod';
import { emailSchema, verificationCodeSchema } from './common-auth.schemas';

export const verifyEmailCodeSchema = z.object({
  email: emailSchema,
  code: verificationCodeSchema,
});

export type VerifyEmailCodeRequest = z.infer<typeof verifyEmailCodeSchema>;
