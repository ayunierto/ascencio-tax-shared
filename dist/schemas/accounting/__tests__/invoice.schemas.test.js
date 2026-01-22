"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const invoice_schemas_1 = require("../invoice.schemas");
(0, globals_1.describe)('Invoice Schemas', () => {
    (0, globals_1.describe)('createInvoiceSchema', () => {
        (0, globals_1.it)('should validate a complete invoice', () => {
            const validInvoice = {
                fromCompanyId: '',
                billToName: 'John Doe',
                billToEmail: 'john@example.com',
                billToPhone: '+1234567890',
                issueDate: '2026-01-14',
                dueDate: '2026-02-14',
                taxRate: 13,
                lineItems: [
                    {
                        description: 'Service 1',
                        quantity: 1,
                        price: 100,
                    },
                ],
            };
            const result = invoice_schemas_1.createInvoiceSchema.safeParse(validInvoice);
            (0, globals_1.expect)(result.success).toBe(true);
        });
        (0, globals_1.it)('should require either billToClientId or billToName', () => {
            const invalidInvoice = {
                fromCompanyId: '',
                issueDate: '2026-01-14',
                dueDate: '2026-02-14',
                taxRate: 13,
                lineItems: [
                    {
                        description: 'Service 1',
                        quantity: 1,
                        price: 100,
                    },
                ],
            };
            const result = invoice_schemas_1.createInvoiceSchema.safeParse(invalidInvoice);
            (0, globals_1.expect)(result.success).toBe(false);
        });
        (0, globals_1.it)('should accept empty fromCompanyId for Sole Proprietor auto-creation', () => {
            const validInvoice = {
                fromCompanyId: '',
                billToName: 'John Doe',
                billToEmail: 'john@example.com',
                issueDate: '2026-01-14',
                dueDate: '2026-02-14',
                lineItems: [
                    {
                        description: 'Service 1',
                        quantity: 1,
                        price: 100,
                    },
                ],
            };
            const result = invoice_schemas_1.createInvoiceSchema.safeParse(validInvoice);
            (0, globals_1.expect)(result.success).toBe(true);
            if (result.success) {
                (0, globals_1.expect)(result.data.fromCompanyId).toBeUndefined();
            }
        });
        (0, globals_1.it)('should accept optional address fields', () => {
            const validInvoice = {
                fromCompanyId: '',
                billToName: 'John Doe',
                billToEmail: 'john@example.com',
                billToCity: 'Toronto',
                billToProvince: 'ON',
                billToPostalCode: 'M5H 2N2',
                billToCountry: 'Canada',
                issueDate: '2026-01-14',
                dueDate: '2026-02-14',
                lineItems: [
                    {
                        description: 'Service 1',
                        quantity: 1,
                        price: 100,
                    },
                ],
            };
            const result = invoice_schemas_1.createInvoiceSchema.safeParse(validInvoice);
            (0, globals_1.expect)(result.success).toBe(true);
        });
        (0, globals_1.it)('should require at least one line item', () => {
            const invalidInvoice = {
                fromCompanyId: '',
                billToName: 'John Doe',
                issueDate: '2026-01-14',
                dueDate: '2026-02-14',
                lineItems: [],
            };
            const result = invoice_schemas_1.createInvoiceSchema.safeParse(invalidInvoice);
            (0, globals_1.expect)(result.success).toBe(false);
        });
    });
    (0, globals_1.describe)('updateInvoiceSchema', () => {
        (0, globals_1.it)('should accept empty strings for optional fields', () => {
            const updateData = {
                description: '',
                notes: '',
                logoUrl: '',
            };
            const result = invoice_schemas_1.updateInvoiceSchema.safeParse(updateData);
            (0, globals_1.expect)(result.success).toBe(true);
        });
        (0, globals_1.it)('should accept undefined for optional fields', () => {
            const updateData = {
                description: undefined,
                notes: undefined,
                logoUrl: undefined,
                taxRate: undefined,
            };
            const result = invoice_schemas_1.updateInvoiceSchema.safeParse(updateData);
            (0, globals_1.expect)(result.success).toBe(true);
        });
        (0, globals_1.it)('should accept partial updates with only changed fields', () => {
            const updateData = {
                taxRate: 15,
                notes: 'Updated notes',
            };
            const result = invoice_schemas_1.updateInvoiceSchema.safeParse(updateData);
            (0, globals_1.expect)(result.success).toBe(true);
        });
        (0, globals_1.it)('should accept full update with all fields', () => {
            const updateData = {
                fromCompanyId: '123e4567-e89b-12d3-a456-426614174000',
                billToName: 'Jane Smith',
                billToEmail: 'jane@example.com',
                billToPhone: '+0987654321',
                billToAddress: '123 Main St',
                billToCity: 'Toronto',
                billToProvince: 'ON',
                billToPostalCode: 'M5H 2N2',
                billToCountry: 'Canada',
                issueDate: '2026-01-15',
                dueDate: '2026-02-15',
                taxRate: 13,
                description: 'Invoice description',
                notes: 'Some notes',
                lineItems: [
                    {
                        description: 'Updated service',
                        quantity: 2,
                        price: 200,
                    },
                ],
                status: 'issued',
            };
            const result = invoice_schemas_1.updateInvoiceSchema.safeParse(updateData);
            (0, globals_1.expect)(result.success).toBe(true);
        });
        (0, globals_1.it)('should handle line items with undefined', () => {
            const updateData = {
                taxRate: 15,
                lineItems: undefined,
            };
            const result = invoice_schemas_1.updateInvoiceSchema.safeParse(updateData);
            (0, globals_1.expect)(result.success).toBe(true);
        });
        (0, globals_1.it)('should validate line items format if provided', () => {
            const updateData = {
                lineItems: [
                    {
                        description: 'Valid item',
                        quantity: 1,
                        price: 100,
                    },
                ],
            };
            const result = invoice_schemas_1.updateInvoiceSchema.safeParse(updateData);
            (0, globals_1.expect)(result.success).toBe(true);
        });
        (0, globals_1.it)('should reject invalid line items', () => {
            const updateData = {
                lineItems: [
                    {
                        description: 'Invalid item',
                        quantity: -1, // Invalid: should be positive
                        price: 100,
                    },
                ],
            };
            const result = invoice_schemas_1.updateInvoiceSchema.safeParse(updateData);
            (0, globals_1.expect)(result.success).toBe(false);
        });
        (0, globals_1.it)('should handle empty array of address fields', () => {
            const updateData = {
                billToAddress: '',
                billToCity: '',
                billToProvince: '',
                billToPostalCode: '',
                billToCountry: '',
            };
            const result = invoice_schemas_1.updateInvoiceSchema.safeParse(updateData);
            (0, globals_1.expect)(result.success).toBe(true);
        });
        (0, globals_1.it)('should accept valid email when provided', () => {
            const updateData = {
                billToEmail: 'valid@example.com',
            };
            const result = invoice_schemas_1.updateInvoiceSchema.safeParse(updateData);
            (0, globals_1.expect)(result.success).toBe(true);
        });
        (0, globals_1.it)('should accept empty email string', () => {
            const updateData = {
                billToEmail: '',
            };
            const result = invoice_schemas_1.updateInvoiceSchema.safeParse(updateData);
            (0, globals_1.expect)(result.success).toBe(true);
        });
        (0, globals_1.it)('should reject invalid email format when not empty', () => {
            const updateData = {
                billToEmail: 'not-an-email',
            };
            const result = invoice_schemas_1.updateInvoiceSchema.safeParse(updateData);
            (0, globals_1.expect)(result.success).toBe(false);
        });
    });
});
