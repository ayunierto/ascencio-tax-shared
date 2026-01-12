import z from 'zod';
import { ValidationMessages as ValMsgs } from '../../i18n';
import { buildZodMessage } from '../../utils';

export const verificationCodeSchema = z
  .string()
  .length(6, buildZodMessage(ValMsgs.MIN_LENGTH, { min: 6 }))
  .max(6, buildZodMessage(ValMsgs.MAX_LENGTH, { max: 6 }))
  .nonempty(buildZodMessage(ValMsgs.REQUIRED));

export const passwordSchema = z
  .string()
  .min(6, buildZodMessage(ValMsgs.MIN_LENGTH, { min: 6 }))
  .max(100, buildZodMessage(ValMsgs.MAX_LENGTH, { max: 100 }));
