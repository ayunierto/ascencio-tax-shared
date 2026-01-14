import { z } from 'zod';
import { InvoiceStatus } from '../../interfaces';
import { ValidationMessages as ValMsgs } from '../../i18n';

export const invoiceLineItemSchema = z.object({
  description: z.string({ error: ValMsgs.STRING }),
  quantity: z
    .number({ error: ValMsgs.NUMBER })
    .positive({ error: ValMsgs.POSITIVE }),
  price: z
    .number({ error: ValMsgs.NUMBER })
    .nonnegative({ error: ValMsgs.NON_NEGATIVE }),
});

export const createInvoiceSchema = z
  .object({
    // From Company (required - will auto-create "Sole Proprietor" if user has no company)
    fromCompanyId: z.uuid({ error: ValMsgs.UUID }),

    // Client relation (optional)
    billToClientId: z
      .union([z.uuid({ error: ValMsgs.UUID }), z.literal(''), z.undefined()])
      .transform((val) => (val === '' ? undefined : val))
      .optional(),

    // Inline client data (used when billToClientId is not provided)
    billToName: z.string({ error: ValMsgs.STRING }).optional(),
    billToEmail: z
      .string({ error: ValMsgs.STRING })
      .email({ error: ValMsgs.EMAIL })
      .optional(),
    billToPhone: z.string({ error: ValMsgs.STRING }).optional(),
    billToAddress: z.string({ error: ValMsgs.STRING }).optional(),

    issueDate: z.string({ error: ValMsgs.DATE }),
    dueDate: z.string({ error: ValMsgs.DATE }),

    taxRate: z.number({ error: ValMsgs.NUMBER }).default(13),
    description: z.string({ error: ValMsgs.STRING }).optional().or(z.literal('')),
    notes: z.string({ error: ValMsgs.STRING }).optional().or(z.literal('')),
    logoUrl: z
      .union([
        z.string({ error: ValMsgs.STRING }).url({ error: ValMsgs.URL }),
        z.literal(''),
        z.undefined(),
      ])
      .optional(),

    lineItems: z
      .array(invoiceLineItemSchema, { error: ValMsgs.ARRAY })
      .min(1, { error: ValMsgs.MIN_ITEMS }),
    status: z
      .enum(InvoiceStatus, { error: ValMsgs.INVALID_ENUM })
      .default('draft'),
  })
  .refine(
    (data) => {
      // Either billToClientId OR billToName must be provided
      return data.billToClientId || data.billToName;
    },
    {
      message: 'Either billToClientId or billToName must be provided',
      path: ['billToClientId'],
    },
  );

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

/** Schema for issuing an invoice (draft -> issued) */
export const issueInvoiceSchema = z.object({
  issueDate: z.string({ error: ValMsgs.DATE }).optional(), // If not provided, use current date
});

export type IssueInvoiceRequest = z.infer<typeof issueInvoiceSchema>;
