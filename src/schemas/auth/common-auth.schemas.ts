import z from 'zod';
import { CommonMessages } from '../../i18n';

export const verificationCodeSchema = z
  .string()
  .length(6, { error: CommonMessages.VALIDATION_MIN_LENGTH })
  .nonempty({ error: CommonMessages.VALIDATION_REQUIRED });

export const passwordSchema = z
  .string()
  .min(6, { error: CommonMessages.VALIDATION_MIN_LENGTH })
  .max(100, { error: CommonMessages.VALIDATION_MAX_LENGTH });

export const emailSchema = z
  .email({ error: CommonMessages.VALIDATION_EMAIL })
  .nonempty({ error: CommonMessages.VALIDATION_REQUIRED });
