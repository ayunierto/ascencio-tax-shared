import { z } from 'zod';
import { InvoiceStatus } from '../../interfaces';
import { ValidationMessages as ValMsgs } from '../../i18n';

// Schema for individual line items in an invoice
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
    // From Company (optional in UI - backend auto-creates "Sole Proprietor" if empty)
    fromCompanyId: z
      .union([z.uuid({ error: ValMsgs.UUID }), z.literal(''), z.undefined()])
      .transform((val) => (val === '' || !val ? undefined : val))
      .optional(),

    // Client relation (optional)
    billToClientId: z
      .union([z.uuid({ error: ValMsgs.UUID }), z.literal(''), z.undefined()])
      .transform((val) => (val === '' ? undefined : val))
      .optional(),

    // Inline client data (used when billToClientId is not provided)
    billToFullName: z
      .union([
        z.string({ error: ValMsgs.STRING }).min(1, { error: ValMsgs.REQUIRED }),
        z.literal(''),
        z.undefined(),
      ])
      .transform((val) => (val === '' ? undefined : val))
      .optional(),
    billToEmail: z
      .union([
        z.string({ error: ValMsgs.STRING }).email({ error: ValMsgs.EMAIL }),
        z.literal(''),
        z.undefined(),
      ])
      .transform((val) => (val === '' ? undefined : val))
      .optional(),
    billToPhone: z
      .union([z.string({ error: ValMsgs.STRING }), z.literal(''), z.undefined()])
      .transform((val) => (val === '' ? undefined : val))
      .optional(),
    billToAddress: z.string({ error: ValMsgs.STRING }).optional(),
    billToCity: z.string({ error: ValMsgs.STRING }).optional(),
    billToProvince: z.string({ error: ValMsgs.STRING }).optional(),
    billToPostalCode: z.string({ error: ValMsgs.STRING }).optional(),
    billToCountry: z.string({ error: ValMsgs.STRING }).optional(),
    billToSIN: z.string({ error: ValMsgs.STRING }).optional(),
    billToBusinessNumber: z.string({ error: ValMsgs.STRING }).optional(),

    // Invoice details
    issueDate: z.string({ error: ValMsgs.STRING }), //
    dueDate: z.string({ error: ValMsgs.STRING }),
    taxRate: z.number({ error: ValMsgs.NUMBER }).default(13),
    notes: z.string({ error: ValMsgs.STRING }).optional().or(z.literal('')),
    logoUrl: z
      .union([z.url({ error: ValMsgs.URL }), z.literal(''), z.undefined()])
      .optional(),

    lineItems: z
      .array(invoiceLineItemSchema, { error: ValMsgs.ARRAY })
      .min(1, { error: ValMsgs.MIN_ITEMS }),
    status: z
      .enum(InvoiceStatus, { error: ValMsgs.INVALID_ENUM })
      .default('draft'),
  })
  .superRefine((data, ctx) => {
    // Si hay billToClientId, no validamos nada más
    if (data.billToClientId) return;

    // Si NO hay billToClientId, estos campos son obligatorios
    if (!data.billToFullName) {
      ctx.addIssue({
        path: ['billToFullName'],
        message: ValMsgs.REQUIRED,
        code: 'custom',
      });
    }

    if (!data.billToEmail) {
      ctx.addIssue({
        path: ['billToEmail'],
        message: ValMsgs.REQUIRED,
        code: 'custom',
      });
    }

    if (!data.billToPhone) {
      ctx.addIssue({
        path: ['billToPhone'],
        message: ValMsgs.REQUIRED,
        code: 'custom',
      });
    }
  });

export type CreateInvoiceRequest = z.infer<typeof createInvoiceSchema>;

// Cannot use .partial() on schemas with .refine(), so we define it manually
export const updateInvoiceSchema = z.object({
  // From Company (optional in UI - backend auto-creates "Sole Proprietor" if empty)
  fromCompanyId: z
    .union([z.uuid({ error: ValMsgs.UUID }), z.literal(''), z.undefined()])
    .transform((val) => (val === '' || !val ? undefined : val))
    .optional(),

  // Client relation (optional)
  billToClientId: z
    .union([z.uuid({ error: ValMsgs.UUID }), z.literal(''), z.undefined()])
    .transform((val) => (val === '' ? undefined : val))
    .optional(),

  billToFullName: z
    .union([
      z.string({ error: ValMsgs.STRING }).min(1, { error: ValMsgs.REQUIRED }),
      z.literal(''),
      z.undefined(),
    ])
    .optional(),
  billToEmail: z
    .union([
      z.string({ error: ValMsgs.STRING }).email({ error: ValMsgs.EMAIL }),
      z.literal(''),
      z.undefined(),
    ])
    .optional(),
  billToPhone: z
    .union([z.string({ error: ValMsgs.STRING }), z.literal(''), z.undefined()])
    .optional(),
  billToAddress: z
    .union([z.string({ error: ValMsgs.STRING }), z.literal(''), z.undefined()])
    .optional(),
  billToCity: z
    .union([z.string({ error: ValMsgs.STRING }), z.literal(''), z.undefined()])
    .optional(),
  billToProvince: z
    .union([z.string({ error: ValMsgs.STRING }), z.literal(''), z.undefined()])
    .optional(),
  billToPostalCode: z
    .union([z.string({ error: ValMsgs.STRING }), z.literal(''), z.undefined()])
    .optional(),
  billToCountry: z
    .union([z.string({ error: ValMsgs.STRING }), z.literal(''), z.undefined()])
    .optional(),
  issueDate: z
    .union([z.string({ error: ValMsgs.STRING }), z.undefined()])
    .optional(),
  dueDate: z
    .union([z.string({ error: ValMsgs.STRING }), z.undefined()])
    .optional(),
  taxRate: z
    .union([z.number({ error: ValMsgs.NUMBER }), z.undefined()])
    .optional(),
  notes: z
    .union([z.string({ error: ValMsgs.STRING }), z.literal(''), z.undefined()])
    .optional(),
  logoUrl: z
    .union([
      z.string({ error: ValMsgs.STRING }).url({ error: ValMsgs.URL }),
      z.literal(''),
      z.undefined(),
    ])
    .optional(),
  lineItems: z
    .union([
      z
        .array(invoiceLineItemSchema, { error: ValMsgs.ARRAY })
        .min(1, { error: ValMsgs.MIN_ITEMS }),
      z.undefined(),
    ])
    .optional(),
  status: z
    .union([
      z.enum(InvoiceStatus, { error: ValMsgs.INVALID_ENUM }),
      z.undefined(),
    ])
    .optional(),
});

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
