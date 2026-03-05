import { z } from 'zod';
import { ValidationMessages as ValMsgs } from '../i18n';

export const appPlatformEnum = z.enum(['ios', 'android', 'web', 'all'], {
  error: ValMsgs.INVALID_ENUM,
});

export const createAppVersionSchema = z.object({
  platform: appPlatformEnum,
  minSupportedVersion: z
    .string({ error: ValMsgs.REQUIRED })
    .min(1, { error: ValMsgs.MIN_LENGTH }),
  latestVersion: z
    .string({ error: ValMsgs.REQUIRED })
    .min(1, { error: ValMsgs.MIN_LENGTH }),
  forceUpdate: z.boolean({ error: ValMsgs.BOOLEAN }),
  releaseNotes: z.string().optional(),
});

export type CreateAppVersionRequest = z.infer<typeof createAppVersionSchema>;

export const updateAppVersionSchema = createAppVersionSchema.partial();

export type UpdateAppVersionRequest = z.infer<typeof updateAppVersionSchema>;
