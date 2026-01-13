import z from 'zod';
import { ValidationMessages as ValMsgs } from '../../i18n';
import { emailSchema as email } from '../common.schemas';
import { phoneNumberSchema as phone } from '../common.schemas';
import { buildZodMessage as buildZodMsg } from '../../utils';
import { businessNumberSchema as businessNumber } from './common-accounting.schemas';

export const createCompanySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, buildZodMsg(ValMsgs.REQUIRED)),
  legalName: z.string().min(1, buildZodMsg(ValMsgs.REQUIRED)),
  businessNumber,
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
