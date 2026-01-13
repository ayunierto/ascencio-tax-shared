import { Company } from '../companies.interfaces';
import { Client } from './client.interfaces';

export const InvoiceStatus = [
  'pending',
  'paid',
  'overdue',
  'canceled',
] as const;
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

  /** Company issuing the invoice */
  fromCompanyId?: string;
  fromCompany?: Company;

  /** Client receiving the invoice (Bill To) */
  billToClientId: string;
  billToClient?: Client;

  invoiceNumber: string;
  invoiceYear: number;
  issueDate: string;
  dueDate: string;

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
