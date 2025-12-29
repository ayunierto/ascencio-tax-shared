import z from 'zod';
import { CommonMessages } from '../../i18n';
import { buildZodMessage } from '../../utils';

export const verificationCodeSchema = z
  .string()
  .length(6, buildZodMessage(CommonMessages.VALIDATION_MIN_LENGTH, { min: 6 }))
  .nonempty(buildZodMessage(CommonMessages.VALIDATION_REQUIRED));

export const passwordSchema = z
  .string()
  .min(6, buildZodMessage(CommonMessages.VALIDATION_MIN_LENGTH, { min: 6 }))
  .max(
    100,
    buildZodMessage(CommonMessages.VALIDATION_MAX_LENGTH, { max: 100 }),
  );

export const emailSchema = z
  .email(buildZodMessage(CommonMessages.VALIDATION_EMAIL))
  .nonempty(buildZodMessage(CommonMessages.VALIDATION_REQUIRED));
