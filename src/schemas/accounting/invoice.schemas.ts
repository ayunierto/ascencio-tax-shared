import { z } from 'zod';
import { BillToType, InvoiceStatus } from '../../interfaces';
import { CommonMessages } from '../../i18n';

export const invoiceLineItemSchema = z.object({
  description: z
    .string()
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  quantity: z.number().positive(),
  price: z.number().nonnegative(),
});

export const createInvoiceSchema = z.object({
  billToType: z.enum(BillToType, {
    error: CommonMessages.VALIDATION_INVALID_ENUM,
  }),
  fromCompanyId: z.uuid({ error: CommonMessages.VALIDATION_UUID }).optional(),
  billToCompanyId: z.uuid({ error: CommonMessages.VALIDATION_UUID }).optional(),
  billToEmployeeId: z.uuid({ error: CommonMessages.VALIDATION_UUID }).optional(),

  billToFullName: z.string().optional(),
  billToAddress: z.string().optional(),
  billToBusinessNumber: z.string().optional(),
  billToEmail: z.email({ error: CommonMessages.VALIDATION_EMAIL }).optional(),
  billToPhone: z.string().optional(),

  issueDate: z.string(),
  dueDate: z.string(),

  taxRate: z.number().default(13),
  description: z.string().optional(),
  notes: z.string().optional(),
  logoUrl: z.string().url().optional(),

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
