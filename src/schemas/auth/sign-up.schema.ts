import z from 'zod';
import { ValidationMessages as ValMsgs } from '../../i18n';
import { passwordSchema } from './common-auth.schemas';
import {
  emailSchema as email,
  firstNameSchema,
  lastNameSchema,
} from '../common.schemas';
import { buildZodMessage } from '../../utils';

export const signUpSchema = z.object({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  email,
  countryCode: z.string().optional(),
  phoneNumber: z.string().optional(),
  timeZone: z.string().nonempty(buildZodMessage(ValMsgs.REQUIRED)),
  locale: z.string().optional(),
  password: passwordSchema,
});

export type SignUpRequest = z.infer<typeof signUpSchema>;
