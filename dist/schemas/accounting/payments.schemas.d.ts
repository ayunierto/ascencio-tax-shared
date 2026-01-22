import { z } from 'zod';
export declare const createPaymentSchema: z.ZodObject<{
    accountReceivableId: z.ZodUUID;
    amount: z.ZodNumber;
    paymentDate: z.ZodString;
    paymentMethod: z.ZodEnum<{
        cash: "cash";
        check: "check";
        transfer: "transfer";
        credit_card: "credit_card";
        debit_card: "debit_card";
        other: "other";
    }>;
    reference: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreatePaymentRequest = z.infer<typeof createPaymentSchema>;
//# sourceMappingURL=payments.schemas.d.ts.map