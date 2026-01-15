export const AccountReceivableStatus = [
  'open',
  'partial',
  'paid',
  'overdue',
  'written_off',
] as const;
export type AccountReceivableStatus = (typeof AccountReceivableStatus)[number];

export const PaymentMethod = [
  'cash',
  'check',
  'transfer',
  'credit_card',
  'debit_card',
  'other',
] as const;
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
