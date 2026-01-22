import { z } from 'zod';
export declare const createSystemSettingSchema: z.ZodObject<{
    key: z.ZodString;
    value: z.ZodString;
    type: z.ZodString;
}, z.core.$strip>;
export type CreateSystemSettingRequest = z.infer<typeof createSystemSettingSchema>;
export declare const updateSystemSettingSchema: z.ZodObject<{
    key: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UpdateSystemSettingRequest = z.infer<typeof updateSystemSettingSchema>;
//# sourceMappingURL=system-settings.schemas.d.ts.map