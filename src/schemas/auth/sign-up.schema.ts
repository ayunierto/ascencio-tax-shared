import z from 'zod';
import { CommonMessages } from '../../i18n';
import { emailSchema, passwordSchema } from './common-auth.schemas';
import { firstNameSchema, lastNameSchema } from '../common.schemas';
import { buildZodMessage } from '../../utils';

export const signUpSchema = z.object({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  email: emailSchema,
  countryCode: z.string().optional(),
  phoneNumber: z.string().optional(),
  timeZone: z
    .string()
    .nonempty(buildZodMessage(CommonMessages.VALIDATION_REQUIRED)),
  locale: z.string().optional(),
  password: passwordSchema,
});

export type SignUpRequest = z.infer<typeof signUpSchema>;
