import { z } from 'zod';
import { ValidationMessages as ValMsgs } from '../i18n';

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

export type ZoomMeetingSettingsRequest = z.infer<
  typeof zoomMeetingSettingsSchema
>;

// Zoom Meeting
export const createZoomMeetingSchema = z.object({
  agenda: z.string().optional(),
  topic: z
    .string({ error: ValMsgs.STRING })
    .min(1, { error: ValMsgs.REQUIRED }),
  type: z
    .number({ error: ValMsgs.NUMBER })
    .int({ error: ValMsgs.NUMBER })
    .optional()
    .default(2),
  start_time: z
    .string({ error: ValMsgs.STRING })
    .min(1, { error: ValMsgs.REQUIRED })
    .optional(),
  duration: z
    .number({ error: ValMsgs.NUMBER })
    .int({ error: ValMsgs.NUMBER })
    .optional(),
  timezone: z.string().optional(),
  password: z.string().optional(),
  default_password: z.boolean().optional(),
  settings: zoomMeetingSettingsSchema.optional(),
});

export type CreateZoomMeetingRequest = z.infer<typeof createZoomMeetingSchema>;

export const updateZoomMeetingSchema = createZoomMeetingSchema.partial();

export type UpdateZoomMeetingRequest = z.infer<typeof updateZoomMeetingSchema>;
