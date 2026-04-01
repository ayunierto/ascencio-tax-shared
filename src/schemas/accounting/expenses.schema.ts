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

const moneySchema = z
  .union([z.number(), z.string()])
  .transform((value) => {
    if (typeof value === 'string') {
      return value.trim().replace(',', '.');
    }
    return value;
  })
  .pipe(z.coerce.number({ error: ValMsgs.NUMBER }))
  .refine((val) => Number.isFinite(val), { error: ValMsgs.NUMBER })
  .refine((val) => Math.abs(val * 100 - Math.round(val * 100)) < 1e-8, {
    error: ValMsgs.NUMBER,
  });

export const createExpenseSchema = z.object({
  id: z.string().optional(),
  merchant: z.string().nonempty({ error: ValMsgs.REQUIRED }),
  date: z.iso.datetime({ error: ValMsgs.ISO_DATETIME }),
  total: moneySchema,
  tax: moneySchema,
  imageUrl: imageUrlSchema,
  notes: z.string().optional(),
  categoryId: z
    .string({ error: ValMsgs.REQUIRED })
    .nonempty({ error: ValMsgs.REQUIRED })
    .pipe(z.uuid({ error: ValMsgs.UUID })),
  subcategoryId: z.uuid({ error: ValMsgs.UUID }).optional(),
});

// Input type (accepts string or number)
export type CreateExpenseInput = z.input<typeof createExpenseSchema>;

// Output type (after coercion, always numbers)
export type CreateExpenseRequest = z.output<typeof createExpenseSchema>;

export const updateExpenseSchema = createExpenseSchema.partial();

export type UpdateExpenseRequest = z.infer<typeof updateExpenseSchema>;
