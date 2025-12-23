import z from 'zod';
import { CommonMessages } from '../i18n';

export const firstNameSchema = z
  .string()
  .min(2, { message: CommonMessages.VALIDATION_MIN_LENGTH })
  .max(50, { message: CommonMessages.VALIDATION_MAX_LENGTH });

export const lastNameSchema = z
  .string()
  .min(2, { message: CommonMessages.VALIDATION_MIN_LENGTH })
  .max(50, { message: CommonMessages.VALIDATION_MAX_LENGTH });

export const countryCodeSchema = z
  .string()
  .min(1, { message: CommonMessages.VALIDATION_MIN_LENGTH })
  .max(10, { message: CommonMessages.VALIDATION_MAX_LENGTH });

export const phoneNumberSchema = z
  .string()
  .min(4, { message: CommonMessages.VALIDATION_MIN_LENGTH })
  .max(15, { message: CommonMessages.VALIDATION_MAX_LENGTH });
