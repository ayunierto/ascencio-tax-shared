import z from 'zod';
import { verificationCodeSchema } from './common-auth.schemas';
import { emailSchema } from '../common.schemas';

export const verifyEmailCodeSchema = z.object({
  email: emailSchema,
  code: verificationCodeSchema,
});

export type VerifyEmailCodeRequest = z.infer<typeof verifyEmailCodeSchema>;
