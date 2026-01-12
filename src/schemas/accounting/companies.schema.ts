import z from 'zod';
import { ValidationMessages as ValMsgs } from '../../i18n';
import { emailSchema as email } from '../common.schemas';
import { phoneNumberSchema as phone } from '../common.schemas';
import { buildZodMessage as buildZodMsg } from '../../utils';

// Canadian Business Number format: 9 digits + 2 letters + 4 digits
const businessNumberSchema = z
  .string()
  .regex(/^\d{9}[A-Za-z]{2}\d{4}$/, buildZodMsg(ValMsgs.INVALID_FORMAT));

export const createCompanySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, buildZodMsg(ValMsgs.REQUIRED)),
  legalName: z.string().min(1, buildZodMsg(ValMsgs.REQUIRED)),
  businessNumber: businessNumberSchema,
  payrollAccountNumber: z.string().optional(),
  address: z.string().min(1, buildZodMsg(ValMsgs.REQUIRED)),
  city: z.string().trim().min(1, buildZodMsg(ValMsgs.REQUIRED)),
  province: z.string().min(1, buildZodMsg(ValMsgs.REQUIRED)),
  postalCode: z.string().min(1, buildZodMsg(ValMsgs.REQUIRED)),
  phone,
  email,
  mediaToken: z.string().optional(),
});

export type CreateCompanyRequest = z.infer<typeof createCompanySchema>;

export const updateCompanySchema = createCompanySchema.partial();

export type UpdateCompanyRequest = z.infer<typeof updateCompanySchema>;
