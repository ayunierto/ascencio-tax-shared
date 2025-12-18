import { z } from 'zod';
import { ZoomMessages } from '../i18n';

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
  topic: z
    .string({ error: ZoomMessages.TOPIC_REQUIRED })
    .min(1, { error: ZoomMessages.TOPIC_REQUIRED }),
  type: z
    .number({ error: ZoomMessages.TYPE_INVALID })
    .int({ error: ZoomMessages.TYPE_INVALID })
    .optional()
    .default(2),
  start_time: z
    .string({ error: ZoomMessages.START_TIME_INVALID })
    .min(1, { error: ZoomMessages.START_TIME_INVALID })
    .optional(),
  duration: z
    .number({ error: ZoomMessages.DURATION_INVALID })
    .int({ error: ZoomMessages.DURATION_INVALID })
    .optional(),
  timezone: z.string().optional(),
  password: z.string().optional(),
  default_password: z.boolean().optional(),
  settings: zoomMeetingSettingsSchema.optional(),
});

export type CreateZoomMeetingDto = z.infer<typeof createZoomMeetingSchema>;

export const updateZoomMeetingSchema = createZoomMeetingSchema.partial();

export type UpdateZoomMeetingDto = z.infer<typeof updateZoomMeetingSchema>;
