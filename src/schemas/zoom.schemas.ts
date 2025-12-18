import { z } from 'zod';

// Zoom Meeting Settings
export const zoomMeetingSettingsSchema = z.object({
  host_video: z.boolean().optional(),
  participant_video: z.boolean().optional(),
  join_before_host: z.boolean().optional(),
  mute_upon_entry: z.boolean().optional(),
  watermark: z.boolean().optional(),
  audio: z.string().optional(),
  auto_recording: z.string().optional(),
});

export type ZoomMeetingSettingsDto = z.infer<typeof zoomMeetingSettingsSchema>;

// Zoom Meeting
export const createZoomMeetingSchema = z.object({
  agenda: z.string().optional(),
  topic: z.string(),
  type: z.number().int().optional().default(2),
  start_time: z.string().optional(),
  duration: z.number().int().optional(),
  timezone: z.string().optional(),
  password: z.string().optional(),
  default_password: z.boolean().optional(),
  settings: zoomMeetingSettingsSchema.optional(),
});

export type CreateZoomMeetingDto = z.infer<typeof createZoomMeetingSchema>;

export const updateZoomMeetingSchema = createZoomMeetingSchema.partial();

export type UpdateZoomMeetingDto = z.infer<typeof updateZoomMeetingSchema>;
