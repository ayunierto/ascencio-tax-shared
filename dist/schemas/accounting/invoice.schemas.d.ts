import { z } from 'zod';
export declare const invoiceLineItemSchema: z.ZodObject<{
    description: z.ZodString;
    quantity: z.ZodCoercedNumber<unknown>;
    price: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export declare const createInvoiceSchema: z.ZodObject<{
    fromCompanyId: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodUUID, z.ZodLiteral<"">, z.ZodUndefined]>, z.ZodTransform<string | undefined, string | undefined>>>;
    billToClientId: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodUUID, z.ZodLiteral<"">, z.ZodUndefined]>, z.ZodTransform<string | undefined, string | undefined>>>;
    billToFullName: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodUndefined]>, z.ZodTransform<string | undefined, string | undefined>>>;
    billToEmail: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodUndefined]>, z.ZodTransform<string | undefined, string | undefined>>>;
    billToPhone: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodUndefined]>, z.ZodTransform<string | undefined, string | undefined>>>;
    billToAddress: z.ZodOptional<z.ZodString>;
    billToCity: z.ZodOptional<z.ZodString>;
    billToProvince: z.ZodOptional<z.ZodString>;
    billToPostalCode: z.ZodOptional<z.ZodString>;
    billToCountry: z.ZodOptional<z.ZodString>;
    billToSIN: z.ZodOptional<z.ZodString>;
    billToBusinessNumber: z.ZodOptional<z.ZodString>;
    issueDate: z.ZodString;
    dueDate: z.ZodString;
    taxRate: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    notes: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    logoUrl: z.ZodOptional<z.ZodUnion<readonly [z.ZodURL, z.ZodLiteral<"">, z.ZodUndefined]>>;
    lineItems: z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        quantity: z.ZodCoercedNumber<unknown>;
        price: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>>;
    status: z.ZodDefault<z.ZodEnum<{
        paid: "paid";
        overdue: "overdue";
        canceled: "canceled";
        draft: "draft";
        issued: "issued";
        partial: "partial";
        void: "void";
    }>>;
}, z.core.$strip>;
export type CreateInvoiceRequest = z.infer<typeof createInvoiceSchema>;
export declare const updateInvoiceSchema: z.ZodObject<{
    fromCompanyId: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodUUID, z.ZodLiteral<"">, z.ZodUndefined]>, z.ZodTransform<string | undefined, string | undefined>>>;
    billToClientId: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodUUID, z.ZodLiteral<"">, z.ZodUndefined]>, z.ZodTransform<string | undefined, string | undefined>>>;
    billToFullName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodUndefined]>>;
    billToEmail: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodUndefined]>>;
    billToPhone: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodUndefined]>>;
    billToAddress: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodUndefined]>>;
    billToCity: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodUndefined]>>;
    billToProvince: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodUndefined]>>;
    billToPostalCode: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodUndefined]>>;
    billToCountry: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodUndefined]>>;
    issueDate: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUndefined]>>;
    dueDate: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUndefined]>>;
    taxRate: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodUndefined]>>;
    notes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodUndefined]>>;
    logoUrl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodUndefined]>>;
    lineItems: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        quantity: z.ZodCoercedNumber<unknown>;
        price: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>>, z.ZodUndefined]>>;
    status: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        paid: "paid";
        overdue: "overdue";
        canceled: "canceled";
        draft: "draft";
        issued: "issued";
        partial: "partial";
        void: "void";
    }>, z.ZodUndefined]>>;
}, z.core.$strip>;
export type UpdateInvoiceRequest = z.infer<typeof updateInvoiceSchema>;
export declare const createInvoicePaymentSchema: z.ZodObject<{
    amount: z.ZodCoercedNumber<unknown>;
    paidAt: z.ZodString;
    method: z.ZodOptional<z.ZodString>;
    reference: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateInvoicePaymentRequest = z.infer<typeof createInvoicePaymentSchema>;
/** Schema for issuing an invoice (draft -> issued) */
export declare const issueInvoiceSchema: z.ZodObject<{
    issueDate: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type IssueInvoiceRequest = z.infer<typeof issueInvoiceSchema>;
//# sourceMappingURL=invoice.schemas.d.ts.map