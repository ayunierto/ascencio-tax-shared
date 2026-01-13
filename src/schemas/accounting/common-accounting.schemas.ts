import z from 'zod';
import { ValidationMessages as ValMsgs } from '../../i18n';
import { buildZodMessage as buildZodMsg } from '../../utils/zod';

// ============================================================
// Canadian Business Number format: 9 digits + 2 letters + 4 digits
// Ejemplo: 123456789RC0001
// ============================================================

// Schema base: valida formato solo si hay valor, transforma vacío a undefined
export const businessNumberSchema = z
  .string()
  .refine(
    (val) => !val || /^\d{9}[A-Za-z]{2}\d{4}$/.test(val),
    buildZodMsg(ValMsgs.INVALID_FORMAT)
  )
  .transform((val) => (val === '' ? undefined : val));

// Schema requerido: exige valor y valida formato
export const businessNumberRequiredSchema = z
  .string()
  .min(1, buildZodMsg(ValMsgs.REQUIRED))
  .regex(/^\d{9}[A-Za-z]{2}\d{4}$/, buildZodMsg(ValMsgs.INVALID_FORMAT));

// ============================================================
// Canadian SIN (Social Insurance Number) format: XXX-XXX-XXX
// Ejemplo: 123-456-789
// ============================================================

// Schema base: valida formato solo si hay valor, transforma vacío a undefined
export const sinSchema = z
  .string()
  .refine(
    (val) => !val || /^\d{3}-\d{3}-\d{3}$/.test(val),
    buildZodMsg(ValMsgs.INVALID_FORMAT)
  )
  .transform((val) => (val === '' ? undefined : val));

// Schema requerido: exige valor y valida formato
export const sinRequiredSchema = z
  .string()
  .min(1, buildZodMsg(ValMsgs.REQUIRED))
  .regex(/^\d{3}-\d{3}-\d{3}$/, buildZodMsg(ValMsgs.INVALID_FORMAT))
  .transform((val) => (val === '' ? undefined : val));
