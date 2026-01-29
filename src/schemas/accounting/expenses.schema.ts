import z from 'zod';
import { ValidationMessages as ValMsgs } from '../../i18n';

// Valida Cloudinary publicId (folders + filename, extensión opcional)
const cloudinaryPublicId = z
  .string()
  .regex(/^[\w\-\/]+(\.[\w\-]+)?$/, 'invalid_public_id');

// Acepta URL o publicId
export const imageUrlSchema = z
  .union([z.url({ error: ValMsgs.URL }), cloudinaryPublicId])
  .optional();

export const createExpenseSchema = z.object({
  id: z.string().optional(),
  merchant: z.string().nonempty({ error: ValMsgs.REQUIRED }),
  date: z.iso.datetime({ error: ValMsgs.ISO_DATETIME }),
  total: z
    .number({ error: ValMsgs.NUMBER })
    .multipleOf(0.01, { error: ValMsgs.NUMBER }),
  tax: z
    .number({ error: ValMsgs.NUMBER })
    .multipleOf(0.01, { error: ValMsgs.NUMBER }),
  imageUrl: imageUrlSchema,
  notes: z.string().optional(),
  categoryId: z
    .string({ error: ValMsgs.REQUIRED })
    .nonempty({ error: ValMsgs.REQUIRED })
    .pipe(z.uuid({ error: ValMsgs.UUID })),
  subcategoryId: z.uuid({ error: ValMsgs.UUID }).optional(),
});

export type CreateExpenseRequest = z.infer<typeof createExpenseSchema>;

export const updateExpenseSchema = createExpenseSchema.partial();

export type UpdateExpenseRequest = z.infer<typeof updateExpenseSchema>;
