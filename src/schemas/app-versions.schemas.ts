import { z } from 'zod';
import { AppVersionsMessages } from '../i18n';

// App Versions
export const appPlatformEnum = z.enum(['IOS', 'ANDROID', 'WEB'], {
  error: AppVersionsMessages.PLATFORM_REQUIRED,
});

export const createAppVersionSchema = z.object({
  platform: appPlatformEnum,
  minSupportedVersion: z
    .string({ error: AppVersionsMessages.MIN_SUPPORTED_REQUIRED })
    .min(1, { error: AppVersionsMessages.MIN_SUPPORTED_REQUIRED }),
  latestVersion: z
    .string({ error: AppVersionsMessages.LATEST_REQUIRED })
    .min(1, { error: AppVersionsMessages.LATEST_REQUIRED }),
  forceUpdate: z.boolean({ error: AppVersionsMessages.FORCE_UPDATE_REQUIRED }),
  releaseNotes: z.string().optional(),
});

export type CreateAppVersionDto = z.infer<typeof createAppVersionSchema>;

export const updateAppVersionSchema = createAppVersionSchema.partial();

export type UpdateAppVersionDto = z.infer<typeof updateAppVersionSchema>;
