import { z } from 'zod';
export declare const zoomMeetingSettingsSchema: z.ZodObject<{
    host_video: z.ZodOptional<z.ZodBoolean>;
    participant_video: z.ZodOptional<z.ZodBoolean>;
    join_before_host: z.ZodOptional<z.ZodBoolean>;
    mute_upon_entry: z.ZodOptional<z.ZodBoolean>;
    watermark: z.ZodOptional<z.ZodBoolean>;
    audio: z.ZodOptional<z.ZodString>;
    auto_recording: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ZoomMeetingSettingsRequest = z.infer<typeof zoomMeetingSettingsSchema>;
export declare const createZoomMeetingSchema: z.ZodObject<{
    agenda: z.ZodOptional<z.ZodString>;
    topic: z.ZodString;
    type: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    start_time: z.ZodOptional<z.ZodString>;
    duration: z.ZodOptional<z.ZodNumber>;
    timezone: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    default_password: z.ZodOptional<z.ZodBoolean>;
    settings: z.ZodOptional<z.ZodObject<{
        host_video: z.ZodOptional<z.ZodBoolean>;
        participant_video: z.ZodOptional<z.ZodBoolean>;
        join_before_host: z.ZodOptional<z.ZodBoolean>;
        mute_upon_entry: z.ZodOptional<z.ZodBoolean>;
        watermark: z.ZodOptional<z.ZodBoolean>;
        audio: z.ZodOptional<z.ZodString>;
        auto_recording: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CreateZoomMeetingRequest = z.infer<typeof createZoomMeetingSchema>;
export declare const updateZoomMeetingSchema: z.ZodObject<{
    agenda: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    topic: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodNumber>>>;
    start_time: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    duration: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    timezone: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    password: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    default_password: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    settings: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        host_video: z.ZodOptional<z.ZodBoolean>;
        participant_video: z.ZodOptional<z.ZodBoolean>;
        join_before_host: z.ZodOptional<z.ZodBoolean>;
        mute_upon_entry: z.ZodOptional<z.ZodBoolean>;
        watermark: z.ZodOptional<z.ZodBoolean>;
        audio: z.ZodOptional<z.ZodString>;
        auto_recording: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type UpdateZoomMeetingRequest = z.infer<typeof updateZoomMeetingSchema>;
//# sourceMappingURL=zoom.schemas.d.ts.map