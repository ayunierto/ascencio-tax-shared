import { z } from 'zod';
import { ValidationMessages as ValMsgs } from '../i18n';

export const appPlatformEnum = z.enum(['IOS', 'ANDROID', 'WEB'], {
  error: ValMsgs.INVALID_ENUM,
});

export const createAppVersionSchema = z.object({
  platform: appPlatformEnum,
  minSupportedVersion: z
    .number({ error: ValMsgs.NUMBER })
    .min(1, { error: ValMsgs.MIN_VALUE }),
  latestVersion: z
    .string({ error: ValMsgs.REQUIRED })
    .min(1, { error: ValMsgs.MIN_LENGTH }),
  forceUpdate: z.boolean({ error: ValMsgs.BOOLEAN }),
  releaseNotes: z.string().optional(),
});

export type CreateAppVersionRequest = z.infer<typeof createAppVersionSchema>;

export const updateAppVersionSchema = createAppVersionSchema.partial();

export type UpdateAppVersionRequest = z.infer<typeof updateAppVersionSchema>;
