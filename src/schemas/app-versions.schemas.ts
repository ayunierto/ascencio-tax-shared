import { z } from 'zod';

// App Versions
export const appPlatformEnum = z.enum(['IOS', 'ANDROID', 'WEB']);

export const createAppVersionSchema = z.object({
  platform: appPlatformEnum,
  minSupportedVersion: z.string(),
  latestVersion: z.string(),
  forceUpdate: z.boolean(),
  releaseNotes: z.string().optional(),
});

export type CreateAppVersionDto = z.infer<typeof createAppVersionSchema>;

export const updateAppVersionSchema = createAppVersionSchema.partial();

export type UpdateAppVersionDto = z.infer<typeof updateAppVersionSchema>;
