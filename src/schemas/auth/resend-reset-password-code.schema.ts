import z from 'zod';
import { emailSchema as email } from '../common.schemas';

export const resendResetPasswordCodeSchema = z.object({
  email,
});

export type ResendResetPasswordCodeRequest = z.infer<
  typeof resendResetPasswordCodeSchema
>;
