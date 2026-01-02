import z from 'zod';
import { CommonMessages } from '../../i18n';
import { emailSchema } from '../auth';
import { phoneNumberSchema } from '../common.schemas';
import { buildZodMessage } from '../../utils';

export const createCompanySchema = z.object({
  id: z.string().optional(),
  name: z
    .string()
    .trim()
    .min(1, buildZodMessage(CommonMessages.VALIDATION_REQUIRED)),
  legalName: z
    .string()
    .trim()
    .min(1, buildZodMessage(CommonMessages.VALIDATION_REQUIRED)),
  // Canadian Business Number format: 9 digits + 2 letters + 4 digits
  businessNumber: z
    .string()
    .trim()
    .regex(
      /^\d{9}[A-Za-z]{2}\d{4}$/,
      buildZodMessage(CommonMessages.VALIDATION_INVALID_FORMAT),
    ),
  payrollAccountNumber: z
    .string()
    .trim()
    .min(1, buildZodMessage(CommonMessages.VALIDATION_REQUIRED)),
  address: z
    .string()
    .trim()
    .min(1, buildZodMessage(CommonMessages.VALIDATION_REQUIRED)),
  city: z
    .string()
    .trim()
    .min(1, buildZodMessage(CommonMessages.VALIDATION_REQUIRED)),
  province: z
    .string()
    .trim()
    .min(1, buildZodMessage(CommonMessages.VALIDATION_REQUIRED)),
  postalCode: z
    .string()
    .trim()
    .min(1, buildZodMessage(CommonMessages.VALIDATION_REQUIRED)),
  phone: phoneNumberSchema,
  email: emailSchema,
  logoUrl: z
    .string()
    .url(buildZodMessage(CommonMessages.VALIDATION_URL))
    .optional(),
});

export type CreateCompanyRequest = z.infer<typeof createCompanySchema>;

export const updateCompanySchema = createCompanySchema.partial();

export type UpdateCompanyRequest = z.infer<typeof updateCompanySchema>;
