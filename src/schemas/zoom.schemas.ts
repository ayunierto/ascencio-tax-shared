import { z } from 'zod';
import { CommonMessages } from '../i18n';

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
    .string({ error: CommonMessages.VALIDATION_STRING })
    .min(1, { error: CommonMessages.VALIDATION_REQUIRED }),
  type: z
    .number({ error: CommonMessages.VALIDATION_NUMBER })
    .int({ error: CommonMessages.VALIDATION_NUMBER })
    .optional()
    .default(2),
  start_time: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .min(1, { error: CommonMessages.VALIDATION_REQUIRED })
    .optional(),
  duration: z
    .number({ error: CommonMessages.VALIDATION_NUMBER })
    .int({ error: CommonMessages.VALIDATION_NUMBER })
    .optional(),
  timezone: z.string().optional(),
  password: z.string().optional(),
  default_password: z.boolean().optional(),
  settings: zoomMeetingSettingsSchema.optional(),
});

export type CreateZoomMeetingRequest = z.infer<typeof createZoomMeetingSchema>;

export const updateZoomMeetingSchema = createZoomMeetingSchema.partial();

export type UpdateZoomMeetingRequest = z.infer<typeof updateZoomMeetingSchema>;
