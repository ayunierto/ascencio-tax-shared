import { z } from 'zod';

// System Settings
export const createSystemSettingSchema = z.object({
  key: z.string(),
  value: z.string(),
  type: z.string(),
});

export type CreateSystemSettingDto = z.infer<typeof createSystemSettingSchema>;

export const updateSystemSettingSchema = createSystemSettingSchema.partial();

export type UpdateSystemSettingDto = z.infer<typeof updateSystemSettingSchema>;
