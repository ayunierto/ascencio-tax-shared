import { z } from 'zod';
import { ValidationMessages } from '../i18n';

export const serviceSchema = z.object({
  name: z
    .string({ error: ValidationMessages.STRING })
    .nonempty({ error: ValidationMessages.REQUIRED }),
  description: z.string().optional(),
  address: z.string().optional(),
  durationMinutes: z
    .number({ error: ValidationMessages.NUMBER })
    .int({ error: ValidationMessages.NUMBER })
    .optional(),
  isAvailableOnline: z.boolean({
    error: ValidationMessages.BOOLEAN,
  }),
  imageUrl: z.url({ error: ValidationMessages.URL }).optional(),
  isActive: z.boolean({ error: ValidationMessages.BOOLEAN }),
  staffIds: z
    .array(z.uuid({ error: ValidationMessages.UUID }), {
      error: ValidationMessages.REQUIRED,
    })
    .nonempty({ error: ValidationMessages.REQUIRED }),
});

export type CreateServiceRequest = z.infer<typeof serviceSchema>;

export const updateServiceSchema = serviceSchema.partial();

export type UpdateServiceRequest = z.infer<typeof updateServiceSchema>;
