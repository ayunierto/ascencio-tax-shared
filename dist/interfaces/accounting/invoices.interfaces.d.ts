import { Company } from '../companies.interfaces';
import { Client } from './client.interfaces';
export declare const InvoiceStatus: readonly ["draft", "issued", "partial", "paid", "overdue", "canceled", "void"];
export type InvoiceStatus = (typeof InvoiceStatus)[number];
export interface InvoiceLineItem {
    id: string;
    invoiceId: string;
    description: string;
    quantity: number;
    price: number;
    lineTotal: number;
    createdAt: string;
    updatedAt: string;
}
export interface Invoice {
    id: string;
    userId: string;
    /** Company issuing the invoice (auto-created as "Sole Proprietor" if user has no company) */
    fromCompanyId: string;
    fromCompany?: Company;
    /** Client receiving the invoice (Bill To) */
    billToClientId?: string;
    billToClient?: Client;
    /** Bill To fields (inline) - used when billToClientId is null */
    billToName?: string;
    billToEmail?: string;
    billToPhone?: string;
    billToAddress?: string;
    billToCity?: string;
    billToProvince?: string;
    billToPostalCode?: string;
    billToCountry?: string;
    invoiceNumber: string;
    invoiceYear: number;
    issueDate: string;
    dueDate: string;
    /** When the invoice was issued (becomes immutable) */
    issuedAt?: string;
    /** Line items */
    lineItems?: InvoiceLineItem[];
    /** Financial fields */
    subtotal: number;
    taxRate: number;
    taxAmount: number;
    total: number;
    amountPaid: number;
    balanceDue: number;
    status: InvoiceStatus;
    paidDate?: string;
    description?: string;
    notes?: string;
    logoUrl?: string;
    pdfUrl?: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
}
//# sourceMappingURL=invoices.interfaces.d.ts.map