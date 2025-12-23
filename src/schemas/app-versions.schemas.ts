import { z } from 'zod';
import { AppVersionsMessages, CommonMessages } from '../i18n';

export const appPlatformEnum = z.enum(['IOS', 'ANDROID', 'WEB'], {
  error: CommonMessages.VALIDATION_INVALID_ENUM,
});

export const createAppVersionSchema = z.object({
  platform: appPlatformEnum,
  minSupportedVersion: z
    .number({ error: CommonMessages.VALIDATION_NUMBER })
    .min(1, { error: CommonMessages.VALIDATION_MIN_VALUE }),
  latestVersion: z
    .string({ error: CommonMessages.VALIDATION_REQUIRED })
    .min(1, { error: CommonMessages.VALIDATION_MIN_LENGTH }),
  forceUpdate: z.boolean({ error: CommonMessages.VALIDATION_BOOLEAN }),
  releaseNotes: z.string().optional(),
});

export type CreateAppVersionRequest = z.infer<typeof createAppVersionSchema>;

export const updateAppVersionSchema = createAppVersionSchema.partial();

export type UpdateAppVersionRequest = z.infer<typeof updateAppVersionSchema>;
