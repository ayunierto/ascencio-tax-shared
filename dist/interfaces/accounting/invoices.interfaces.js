"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceStatus = void 0;
exports.InvoiceStatus = [
    'draft', // Borrador - editable
    'issued', // Emitida - inmutable
    'partial', // Pagada parcialmente
    'paid', // Pagada completamente
    'overdue', // Vencida
    'canceled', // Cancelada antes de emitir
    'void', // Anulada después de emitir
];
