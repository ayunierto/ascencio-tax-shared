import z from 'zod';
import { CommonMessages } from '../i18n';
import { buildZodMessage } from '../utils';

export const firstNameSchema = z
  .string()
  .min(2, buildZodMessage(CommonMessages.VALIDATION_MIN_LENGTH, { min: 2 }))
  .max(50, buildZodMessage(CommonMessages.VALIDATION_MAX_LENGTH, { max: 50 }));

export const lastNameSchema = z
  .string()
  .min(2, buildZodMessage(CommonMessages.VALIDATION_MIN_LENGTH, { min: 2 }))
  .max(50, buildZodMessage(CommonMessages.VALIDATION_MAX_LENGTH, { max: 50 }));

export const countryCodeSchema = z
  .string()
  .min(1, buildZodMessage(CommonMessages.VALIDATION_MIN_LENGTH, { min: 1 }))
  .max(10, buildZodMessage(CommonMessages.VALIDATION_MAX_LENGTH, { max: 10 }));

export const phoneNumberSchema = z
  .string()
  .min(4, buildZodMessage(CommonMessages.VALIDATION_MIN_LENGTH, { min: 4 }))
  .max(15, buildZodMessage(CommonMessages.VALIDATION_MAX_LENGTH, { max: 15 }));
