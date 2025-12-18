import { z } from 'zod';
import { ServicesMessages } from '../i18n';

export const serviceSchema = z.object({
  name: z
    .string({ error: ServicesMessages.NAME_REQUIRED })
    .min(3, { error: ServicesMessages.NAME_REQUIRED }),
  description: z.string().optional(),
  address: z.string().optional(),
  durationMinutes: z
    .number({ error: ServicesMessages.DURATION_INVALID })
    .int({ error: ServicesMessages.DURATION_INVALID })
    .optional(),
  isAvailableOnline: z.boolean({
    error: ServicesMessages.AVAILABLE_ONLINE_REQUIRED,
  }),
  imageUrl: z.url({ error: ServicesMessages.IMAGE_URL_INVALID }).optional(),
  isActive: z.boolean({ error: ServicesMessages.ACTIVE_FLAG_REQUIRED }),
  staffIds: z
    .array(z.uuid({ error: ServicesMessages.STAFF_ID_INVALID }), {
      error: ServicesMessages.STAFFIDS_REQUIRED,
    })
    .nonempty({ error: ServicesMessages.STAFFIDS_REQUIRED }),
});

export type CreateServiceDto = z.infer<typeof serviceSchema>;

export const updateServiceSchema = serviceSchema.partial();

export type UpdateServiceDto = z.infer<typeof updateServiceSchema>;
