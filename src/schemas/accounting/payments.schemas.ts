import { z } from 'zod';
import { ValidationMessages as ValMsgs } from '../../i18n';
import { PaymentMethod } from '../../interfaces';

export const createPaymentSchema = z.object({
  accountReceivableId: z.uuid({ error: ValMsgs.UUID }),
  amount: z
    .number({ error: ValMsgs.NUMBER })
    .positive({ error: ValMsgs.POSITIVE }),
  paymentDate: z.string({ error: ValMsgs.DATE }),
  paymentMethod: z.enum(PaymentMethod, { error: ValMsgs.INVALID_ENUM }),
  reference: z.string({ error: ValMsgs.STRING }).optional(),
  notes: z.string({ error: ValMsgs.STRING }).optional(),
});

export type CreatePaymentRequest = z.infer<typeof createPaymentSchema>;
