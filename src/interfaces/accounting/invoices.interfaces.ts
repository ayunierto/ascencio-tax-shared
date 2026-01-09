import { Company } from '../companies.interfaces';
import { Employee } from '../employees.interfaces';

export const BillToType = ['company', 'employee', 'custom'] as const;
export type BillToType = (typeof BillToType)[number];

export const InvoiceStatus = ['pending', 'paid', 'overdue', 'canceled'] as const;
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

  /** Bill To type: company, employee, or custom */
  billToType: BillToType;
  billToCompanyId?: string;
  billToCompany?: Company;
  billToEmployeeId?: string;
  billToEmployee?: Employee;

  /** Custom Bill To fields (when billToType is 'custom') */
  billToFullName?: string;
  billToAddress?: string;
  billToBusinessNumber?: string;
  billToEmail?: string;
  billToPhone?: string;

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

  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}
