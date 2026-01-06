import z from 'zod';
import { CommonMessages as CM } from '../../i18n';
import { emailSchema as email } from '../auth';
import { phoneNumberSchema as phone } from '../common.schemas';
import { buildZodMessage as buildZodMsg } from '../../utils';

// Canadian Business Number format: 9 digits + 2 letters + 4 digits
const businessNumberSchema = z
  .string()
  .regex(/^\d{9}[A-Za-z]{2}\d{4}$/, buildZodMsg(CM.VALIDATION_INVALID_FORMAT));

export const createCompanySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, buildZodMsg(CM.VALIDATION_REQUIRED)),
  legalName: z.string().min(1, buildZodMsg(CM.VALIDATION_REQUIRED)),
  businessNumber: businessNumberSchema,
  payrollAccountNumber: z.string().optional(),
  address: z.string().min(1, buildZodMsg(CM.VALIDATION_REQUIRED)),
  city: z.string().trim().min(1, buildZodMsg(CM.VALIDATION_REQUIRED)),
  province: z.string().min(1, buildZodMsg(CM.VALIDATION_REQUIRED)),
  postalCode: z.string().min(1, buildZodMsg(CM.VALIDATION_REQUIRED)),
  phone,
  email,
  logoUrl: z.url(buildZodMsg(CM.VALIDATION_URL)).optional(),
});

export type CreateCompanyRequest = z.infer<typeof createCompanySchema>;

export const updateCompanySchema = createCompanySchema.partial();

export type UpdateCompanyRequest = z.infer<typeof updateCompanySchema>;
