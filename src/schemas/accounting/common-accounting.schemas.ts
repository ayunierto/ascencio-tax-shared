import z from 'zod';
import { ValidationMessages as ValMsgs } from '../../i18n';
import { buildZodMessage as buildZodMsg } from '../../utils/zod';

// Helper: acepta null/undefined/"" y valida formato solo si hay valor
const optionalStringWithFormat = (regex: RegExp) =>
  z.preprocess(
    (val) => (val === null ? undefined : val),
    z
      .string()
      .optional()
      .refine(
        (val) => !val || regex.test(val),
        buildZodMsg(ValMsgs.INVALID_FORMAT)
      )
      .transform((val) => (val === '' ? undefined : val))
  );

// Canadian Business Number format: 9 digits + 2 letters + 4 digits (e.g., 123456789RC0001)
export const businessNumberSchema = optionalStringWithFormat(
  /^[0-9]{9}[A-Za-z]{2}[0-9]{4}$/
);

// Canadian SIN format: XXX-XXX-XXX (e.g., 123-456-789)
export const sinSchema = optionalStringWithFormat(/^\d{3}-\d{3}-\d{3}$/);

// Versiones requeridas por si se necesitan en otros contextos
export const businessNumberRequiredSchema = z
  .string()
  .min(1, buildZodMsg(ValMsgs.REQUIRED))
  .regex(/^[0-9]{9}[A-Za-z]{2}[0-9]{4}$/, buildZodMsg(ValMsgs.INVALID_FORMAT));

export const sinRequiredSchema = z
  .string()
  .min(1, buildZodMsg(ValMsgs.REQUIRED))
  .regex(/^\d{3}-\d{3}-\d{3}$/, buildZodMsg(ValMsgs.INVALID_FORMAT))
  .transform((val) => (val === '' ? undefined : val));
