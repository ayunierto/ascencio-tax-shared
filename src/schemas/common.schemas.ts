import z from 'zod';
import { ValidationMessages as ValMsgs } from '../i18n';
import { buildZodMessage } from '../utils';

export const firstNameSchema = z
  .string()
  .min(2, buildZodMessage(ValMsgs.MIN_LENGTH, { min: 2 }))
  .max(50, buildZodMessage(ValMsgs.MAX_LENGTH, { max: 50 }));

export const lastNameSchema = z
  .string()
  .min(2, buildZodMessage(ValMsgs.MIN_LENGTH, { min: 2 }))
  .max(50, buildZodMessage(ValMsgs.MAX_LENGTH, { max: 50 }));

export const emailSchema = z
  .email(buildZodMessage(ValMsgs.EMAIL))
  .nonempty(buildZodMessage(ValMsgs.REQUIRED));

export const countryCodeSchema = z
  .string()
  .min(1, buildZodMessage(ValMsgs.MIN_LENGTH, { min: 1 }))
  .max(10, buildZodMessage(ValMsgs.MAX_LENGTH, { max: 10 }));

export const phoneNumberSchema = z
  .string()
  .min(4, buildZodMessage(ValMsgs.MIN_LENGTH, { min: 9 }))
  .max(15, buildZodMessage(ValMsgs.MAX_LENGTH, { max: 10 }));
