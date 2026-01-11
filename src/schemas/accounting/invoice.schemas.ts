import { z } from 'zod';
import { InvoiceStatus } from '../../interfaces';
import { CommonMessages } from '../../i18n';

export const invoiceLineItemSchema = z.object({
  description: z
    .string()
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  quantity: z.number().positive(),
  price: z.number().nonnegative(),
});

export const createInvoiceSchema = z.object({
  fromCompanyId: z.uuid({ error: CommonMessages.VALIDATION_UUID }).optional(),

  billToFullName: z.string().min(1, { error: CommonMessages.VALIDATION_REQUIRED }),
  billToAddress: z.string().optional(),
  billToBusinessNumber: z.string().optional(),
  billToEmail: z.email({ error: CommonMessages.VALIDATION_EMAIL }).optional().or(z.literal('')),
  billToPhone: z.string().optional(),

  issueDate: z.string(),
  dueDate: z.string(),

  taxRate: z.number().default(13),
  description: z.string().optional(),
  notes: z.string().optional(),
  logoUrl: z.string().url().optional().or(z.literal('')),

  lineItems: z.array(invoiceLineItemSchema).min(1),
  status: z.enum(InvoiceStatus).optional(),
  stripeInvoiceId: z.string().optional(),
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
