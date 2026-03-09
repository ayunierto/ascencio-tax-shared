import { z } from 'zod';
export declare const appPlatformEnum: z.ZodEnum<{
    ios: "ios";
    android: "android";
    web: "web";
    all: "all";
}>;
export declare const createAppVersionSchema: z.ZodObject<{
    platform: z.ZodEnum<{
        ios: "ios";
        android: "android";
        web: "web";
        all: "all";
    }>;
    minSupportedVersion: z.ZodString;
    latestVersion: z.ZodString;
    forceUpdate: z.ZodBoolean;
    releaseNotes: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateAppVersionRequest = z.infer<typeof createAppVersionSchema>;
export declare const updateAppVersionSchema: z.ZodObject<{
    platform: z.ZodOptional<z.ZodEnum<{
        ios: "ios";
        android: "android";
        web: "web";
        all: "all";
    }>>;
    minSupportedVersion: z.ZodOptional<z.ZodString>;
    latestVersion: z.ZodOptional<z.ZodString>;
    forceUpdate: z.ZodOptional<z.ZodBoolean>;
    releaseNotes: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type UpdateAppVersionRequest = z.infer<typeof updateAppVersionSchema>;
//# sourceMappingURL=app-versions.schemas.d.ts.map