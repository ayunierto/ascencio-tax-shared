import { z } from 'zod';
import { ValidationMessages } from '../i18n';

// System Settings
export const createSystemSettingSchema = z.object({
  key: z
    .string({ error: ValidationMessages.STRING })
    .nonempty({ error: ValidationMessages.REQUIRED }),
  value: z
    .string({ error: ValidationMessages.STRING })
    .nonempty({ error: ValidationMessages.REQUIRED }),
  type: z
    .string({ error: ValidationMessages.STRING })
    .nonempty({ error: ValidationMessages.REQUIRED }),
});

export type CreateSystemSettingRequest = z.infer<
  typeof createSystemSettingSchema
>;

export const updateSystemSettingSchema = createSystemSettingSchema.partial();

export type UpdateSystemSettingRequest = z.infer<
  typeof updateSystemSettingSchema
>;
