export declare const AccountReceivableStatus: readonly ["open", "partial", "paid", "overdue", "written_off"];
export type AccountReceivableStatus = (typeof AccountReceivableStatus)[number];
export declare const PaymentMethod: readonly ["cash", "check", "transfer", "credit_card", "debit_card", "other"];
export type PaymentMethod = (typeof PaymentMethod)[number];
export interface AccountReceivable {
    id: string;
    userId: string;
    companyId: string;
    clientId: string;
    invoiceId: string;
    originalAmount: number;
    paidAmount: number;
    balance: number;
    status: AccountReceivableStatus;
    dueDate: string;
    paymentTerms?: string;
    notes?: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
}
export interface Payment {
    id: string;
    recordedByUserId: string;
    accountReceivableId: string;
    amount: number;
    paymentDate: string;
    paymentMethod: PaymentMethod;
    reference?: string;
    notes?: string;
    receipt?: Receipt;
    createdAt: string;
    updatedAt: string;
}
export interface Receipt {
    id: string;
    paymentId: string;
    receiptNumber: string;
    receiptYear: number;
    pdfUrl?: string;
    issuedAt: string;
}
//# sourceMappingURL=payments.interfaces.d.ts.map