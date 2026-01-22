import { z } from 'zod';
export declare const appPlatformEnum: z.ZodEnum<{
    IOS: "IOS";
    ANDROID: "ANDROID";
    WEB: "WEB";
}>;
export declare const createAppVersionSchema: z.ZodObject<{
    platform: z.ZodEnum<{
        IOS: "IOS";
        ANDROID: "ANDROID";
        WEB: "WEB";
    }>;
    minSupportedVersion: z.ZodNumber;
    latestVersion: z.ZodString;
    forceUpdate: z.ZodBoolean;
    releaseNotes: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateAppVersionRequest = z.infer<typeof createAppVersionSchema>;
export declare const updateAppVersionSchema: z.ZodObject<{
    platform: z.ZodOptional<z.ZodEnum<{
        IOS: "IOS";
        ANDROID: "ANDROID";
        WEB: "WEB";
    }>>;
    minSupportedVersion: z.ZodOptional<z.ZodNumber>;
    latestVersion: z.ZodOptional<z.ZodString>;
    forceUpdate: z.ZodOptional<z.ZodBoolean>;
    releaseNotes: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type UpdateAppVersionRequest = z.infer<typeof updateAppVersionSchema>;
//# sourceMappingURL=app-versions.schemas.d.ts.map