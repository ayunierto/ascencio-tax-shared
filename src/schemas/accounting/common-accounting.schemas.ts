import z from 'zod';
import { ValidationMessages as ValMsgs } from '../../i18n';
import { buildZodMessage as buildZodMsg } from '../../utils/zod';

// Canadian Business Number format: 9 digits + 2 letters + 4 digits
export const businessNumberSchema = z
  .string()
  .regex(/^\d{9}[A-Za-z]{2}\d{4}$/, buildZodMsg(ValMsgs.INVALID_FORMAT));

// Validate regex: 123-456-789
export const sinSchema = z
  .string()
  .regex(/^\d{3}-\d{3}-\d{3}$/, buildZodMsg(ValMsgs.INVALID_FORMAT));
