import { z } from 'zod';
import { InvoiceStatus } from '../../interfaces';
import { CommonMessages } from '../../i18n';

export const invoiceLineItemSchema = z.object({
  description: z.string({ error: CommonMessages.VALIDATION_STRING }),
  quantity: z
    .number({ error: CommonMessages.VALIDATION_NUMBER })
    .positive({ error: CommonMessages.VALIDATION_POSITIVE }),
  price: z
    .number({ error: CommonMessages.VALIDATION_NUMBER })
    .nonnegative({ error: CommonMessages.VALIDATION_NON_NEGATIVE }),
});

export const createInvoiceSchema = z.object({
  fromCompanyId: z
    .union([
      z.uuid({ error: CommonMessages.VALIDATION_UUID }),
      z.literal(''),
      z.undefined(),
    ])
    .transform((val) => (val === '' ? undefined : val))
    .optional(),

  billToFullName: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .min(1, { error: CommonMessages.VALIDATION_REQUIRED }),
  billToAddress: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .optional()
    .or(z.literal('')),
  billToBusinessNumber: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .optional()
    .or(z.literal('')),
  billToEmail: z
    .union([
      z.email({ error: CommonMessages.VALIDATION_EMAIL }),
      z.literal(''),
      z.undefined(),
    ])
    .optional(),
  billToPhone: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .optional()
    .or(z.literal('')),

  issueDate: z.string({ error: CommonMessages.VALIDATION_DATE }),
  dueDate: z.string({ error: CommonMessages.VALIDATION_DATE }),

  taxRate: z.number({ error: CommonMessages.VALIDATION_NUMBER }).default(13),
  description: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .optional()
    .or(z.literal('')),
  notes: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .optional()
    .or(z.literal('')),
  logoUrl: z
    .union([
      z
        .string({ error: CommonMessages.VALIDATION_STRING })
        .url({ error: CommonMessages.VALIDATION_URL }),
      z.literal(''),
      z.undefined(),
    ])
    .optional(),

  lineItems: z
    .array(invoiceLineItemSchema, { error: CommonMessages.VALIDATION_ARRAY })
    .min(1, { error: CommonMessages.VALIDATION_MIN_ITEMS }),
  status: z
    .enum(InvoiceStatus, { error: CommonMessages.VALIDATION_INVALID_ENUM })
    .default('pending'),
  stripeInvoiceId: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .optional()
    .or(z.literal('')),
});

export type CreateInvoiceRequest = z.infer<typeof createInvoiceSchema>;

export const updateInvoiceSchema = createInvoiceSchema.partial();

export type UpdateInvoiceRequest = z.infer<typeof updateInvoiceSchema>;

export const createInvoicePaymentSchema = z.object({
  amount: z.number().positive(),
  paidAt: z.string(),
  method: z.string().optional(),
  reference: z.string().optional(),
  note: z.string().optional(),
});

export type CreateInvoicePaymentRequest = z.infer<
  typeof createInvoicePaymentSchema
>;
