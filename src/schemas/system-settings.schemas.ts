import { z } from 'zod';
import { SystemSettingsMessages } from '../i18n';

// System Settings
export const createSystemSettingSchema = z.object({
  key: z
    .string({ error: SystemSettingsMessages.KEY_REQUIRED })
    .min(1, { error: SystemSettingsMessages.KEY_REQUIRED }),
  value: z
    .string({ error: SystemSettingsMessages.VALUE_REQUIRED })
    .min(1, { error: SystemSettingsMessages.VALUE_REQUIRED }),
  type: z
    .string({ error: SystemSettingsMessages.TYPE_REQUIRED })
    .min(1, { error: SystemSettingsMessages.TYPE_REQUIRED }),
});

export type CreateSystemSettingDto = z.infer<typeof createSystemSettingSchema>;

export const updateSystemSettingSchema = createSystemSettingSchema.partial();

export type UpdateSystemSettingDto = z.infer<typeof updateSystemSettingSchema>;
