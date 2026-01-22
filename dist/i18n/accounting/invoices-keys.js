"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesMessages = void 0;
exports.InvoicesMessages = {
    // Invoice validation messages
    INVOICE_NOT_FOUND: 'invoiceNotFound',
    INVOICE_ALREADY_EXISTS: 'invoiceAlreadyExists',
    INVOICE_CREATED_SUCCESSFULLY: 'invoiceCreatedSuccessfully',
    INVOICE_UPDATED_SUCCESSFULLY: 'invoiceUpdatedSuccessfully',
    INVOICE_DELETED_SUCCESSFULLY: 'invoiceDeletedSuccessfully',
    // Invoice fields
    INVOICE_NUMBER: 'invoiceNumber',
    INVOICE_DATE: 'invoiceDate',
    DUE_DATE: 'dueDate',
    ISSUE_DATE: 'issueDate',
    BILL_TO: 'billTo',
    FROM_COMPANY: 'fromCompany',
    DESCRIPTION: 'description',
    NOTES: 'notes',
    // Financial fields
    SUBTOTAL: 'subtotal',
    TAX_RATE: 'taxRate',
    TAX_AMOUNT: 'taxAmount',
    TOTAL: 'total',
    AMOUNT_PAID: 'amountPaid',
    BALANCE_DUE: 'balanceDue',
    // Line items
    LINE_ITEMS: 'lineItems',
    QUANTITY: 'quantity',
    PRICE: 'price',
    // Status
    STATUS_PENDING: 'pending',
    STATUS_PAID: 'paid',
    STATUS_OVERDUE: 'overdue',
    STATUS_CANCELED: 'canceled',
};
