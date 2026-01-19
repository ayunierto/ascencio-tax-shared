import z from 'zod';
import { ValidationMessages as ValMsgs } from '../../i18n';
import { emailSchema, phoneNumberSchema } from '../common.schemas';
import { buildZodMessage as buildZodMsg } from '../../utils';
import { businessNumberSchema, sinSchema } from './common-accounting.schemas';

export const createClientSchema = z.object({
  id: z.string().optional(),

  // === Campos requeridos ===
  fullName: z.string().min(1, buildZodMsg(ValMsgs.REQUIRED)),
  email: emailSchema,
  phone: phoneNumberSchema,

  // === Campos opcionales de dirección ===
  address: z.string().optional(),
  city: z.string().trim().optional(),
  province: z.string().optional(),
  postalCode: z.string().optional(),
  country: z.string().optional(),

  // === Campos opcionales para individuos ===
  sin: sinSchema.optional(),

  // === Campos opcionales para empresas ===
  businessNumber: businessNumberSchema.optional(),
});

export type CreateClientRequest = z.infer<typeof createClientSchema>;

export const updateClientSchema = createClientSchema.partial();

export type UpdateClientRequest = z.infer<typeof updateClientSchema>;
