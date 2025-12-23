import { z } from 'zod';
import { CommonMessages } from '../i18n';

export const serviceSchema = z.object({
  name: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  description: z.string().optional(),
  address: z.string().optional(),
  durationMinutes: z
    .number({ error: CommonMessages.VALIDATION_NUMBER })
    .int({ error: CommonMessages.VALIDATION_NUMBER })
    .optional(),
  isAvailableOnline: z.boolean({
    error: CommonMessages.VALIDATION_BOOLEAN,
  }),
  imageUrl: z.url({ error: CommonMessages.VALIDATION_URL }).optional(),
  isActive: z.boolean({ error: CommonMessages.VALIDATION_BOOLEAN }),
  staffIds: z
    .array(z.uuid({ error: CommonMessages.VALIDATION_UUID }), {
      error: CommonMessages.VALIDATION_REQUIRED,
    })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
});

export type CreateServiceRequest = z.infer<typeof serviceSchema>;

export const updateServiceSchema = serviceSchema.partial();

export type UpdateServiceRequest = z.infer<typeof updateServiceSchema>;
