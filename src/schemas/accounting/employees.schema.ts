import z from 'zod';
import { CommonMessages as CM } from '../../i18n';
import { emailSchema as email } from '../auth';
import { phoneNumberSchema as phone } from '../common.schemas';
import { buildZodMessage as buildZodMsg } from '../../utils';

export const createEmployeeSchema = z.object({
  id: z.string().optional(),
  companyId: z.uuid().optional().nullable(),
  firstName: z.string().min(1, buildZodMsg(CM.VALIDATION_REQUIRED)),
  lastName: z.string().min(1, buildZodMsg(CM.VALIDATION_REQUIRED)),
  email: email.optional().or(z.literal('')),
  phone: phone.optional().or(z.literal('')),
  address: z.string().optional(),
  city: z.string().optional(),
  province: z.string().optional(),
  postalCode: z.string().optional(),
  position: z.string().optional(),
  hourlyRate: z.number().min(0).optional().nullable(),
  salary: z.number().min(0).optional().nullable(),
  sin: z.string().optional(), // Social Insurance Number
  startDate: z.string().optional().nullable(),
  endDate: z.string().optional().nullable(),
  isActive: z.boolean().default(true),
  notes: z.string().optional(),
});

export type CreateEmployeeRequest = z.infer<typeof createEmployeeSchema>;

export const updateEmployeeSchema = createEmployeeSchema.partial().extend({
  id: z.string().uuid(),
});

export type UpdateEmployeeRequest = z.infer<typeof updateEmployeeSchema>;
