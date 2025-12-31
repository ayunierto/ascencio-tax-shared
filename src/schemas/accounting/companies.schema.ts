import z from 'zod';
import { CommonMessages } from '../../i18n';
import { emailSchema } from '../auth';
import { phoneNumberSchema } from '../common.schemas';

export const createCompanySchema = z.object({
  id: z.string().optional(),
  name: z
    .string()
    .trim()
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  legalName: z
    .string()
    .trim()
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  // Canadian Business Number format: 9 digits + 2 letters + 4 digits
  businessNumber: z
    .string()
    .trim()
    .regex(/^\d{9}[A-Za-z]{2}\d{4}$/, {
      // 123456789RC0001
      error: CommonMessages.VALIDATION_INVALID_FORMAT,
    }),
  payrollAccountNumber: z
    .string()
    .trim()
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  address: z
    .string()
    .trim()
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  city: z
    .string()
    .trim()
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  province: z
    .string()
    .trim()
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  postalCode: z
    .string()
    .trim()
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  phone: phoneNumberSchema,
  email: emailSchema,
  logoUrl: z.url(CommonMessages.VALIDATION_URL).optional(),
});

export type CreateCompanyRequest = z.infer<typeof createCompanySchema>;

export const updateCompanySchema = createCompanySchema.partial();

export type UpdateCompanyRequest = z.infer<typeof updateCompanySchema>;
