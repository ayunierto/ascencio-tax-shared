import z from 'zod';
import { ValidationMessages as ValMsgs } from '../../i18n';
import { emailSchema as email } from '../common.schemas';
import { phoneNumberSchema as phone } from '../common.schemas';
import { buildZodMessage as buildZodMsg } from '../../utils';

// Canadian SIN format: 9 digits (XXX-XXX-XXX or XXXXXXXXX)
const sinSchema = z
  .string()
  .regex(/^\d{3}-?\d{3}-?\d{3}$/, buildZodMsg(ValMsgs.INVALID_FORMAT))
  .optional();

// Canadian Business Number format: 9 digits + 2 letters + 4 digits
const businessNumberSchema = z
  .string()
  .regex(/^\d{9}[A-Za-z]{2}\d{4}$/, buildZodMsg(ValMsgs.INVALID_FORMAT))
  .optional();

// Canadian Postal Code format: A1A 1A1 or A1A1A1
const postalCodeSchema = z
  .string()
  .regex(
    /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
    buildZodMsg(ValMsgs.INVALID_FORMAT)
  );

export const createClientSchema = z.object({
  id: z.string().optional(),

  // === Campos requeridos ===
  fullName: z.string().min(1, buildZodMsg(ValMsgs.REQUIRED)),
  email,
  phone,
  address: z.string().min(1, buildZodMsg(ValMsgs.REQUIRED)),
  city: z.string().trim().min(1, buildZodMsg(ValMsgs.REQUIRED)),
  province: z.string().min(1, buildZodMsg(ValMsgs.REQUIRED)),
  postalCode: postalCodeSchema,
  country: z.string().min(1, buildZodMsg(ValMsgs.REQUIRED)),

  // === Campos opcionales para individuos ===
  dateOfBirth: z.string().optional(),
  sin: sinSchema,

  // === Campos opcionales para empresas ===
  businessNumber: businessNumberSchema,
});

export type CreateClientRequest = z.infer<typeof createClientSchema>;

export const updateClientSchema = createClientSchema.partial();

export type UpdateClientRequest = z.infer<typeof updateClientSchema>;
