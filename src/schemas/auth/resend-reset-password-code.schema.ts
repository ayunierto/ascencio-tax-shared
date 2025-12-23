import z from 'zod';
import { emailSchema } from './common-auth.schemas';

export const resendResetPasswordCodeSchema = z.object({
  email: emailSchema,
});

export type ResendResetPasswordCodeRequest = z.infer<
  typeof resendResetPasswordCodeSchema
>;
