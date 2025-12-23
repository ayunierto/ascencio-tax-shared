import { z } from 'zod';
import { CommonMessages } from '../i18n';

// System Settings
export const createSystemSettingSchema = z.object({
  key: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  value: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  type: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
});

export type CreateSystemSettingRequest = z.infer<
  typeof createSystemSettingSchema
>;

export const updateSystemSettingSchema = createSystemSettingSchema.partial();

export type UpdateSystemSettingRequest = z.infer<
  typeof updateSystemSettingSchema
>;
