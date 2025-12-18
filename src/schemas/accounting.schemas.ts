import { z } from 'zod';
import { AccountingMessages, CategoriesMessages } from '../i18n';
import type { AccountingMessageKey } from '../i18n';

// Expenses
const moneySchema = (message: AccountingMessageKey) =>
  z.number({ error: message }).multipleOf(0.01, { error: message });

export const createExpenseSchema = z.object({
  merchant: z
    .string({ error: AccountingMessages.MERCHANT_REQUIRED })
    .min(1, { error: AccountingMessages.MERCHANT_REQUIRED }),
  date: z
    .string({ error: AccountingMessages.DATE_INVALID })
    .datetime({ error: AccountingMessages.DATE_INVALID }),
  total: moneySchema(AccountingMessages.TOTAL_INVALID),
  tax: moneySchema(AccountingMessages.TAX_INVALID),
  imageUrl: z.url({ error: AccountingMessages.IMAGE_URL_INVALID }).optional(),
  notes: z.string().optional(),
  categoryId: z.uuid({ error: AccountingMessages.CATEGORY_ID_REQUIRED }),
  subcategoryId: z
    .uuid({ error: AccountingMessages.SUBCATEGORY_ID_INVALID })
    .optional(),
});

export type CreateExpenseDto = z.infer<typeof createExpenseSchema>;

export const updateExpenseSchema = createExpenseSchema.partial();

export type UpdateExpenseDto = z.infer<typeof updateExpenseSchema>;

export const analyzeExpenseSchema = z.object({
  imageUrl: z.url({ error: AccountingMessages.IMAGE_URL_INVALID }),
});

export type AnalyzeExpenseDto = z.infer<typeof analyzeExpenseSchema>;

export const removeReceiptImageSchema = z.object({
  expenseId: z.uuid({ error: AccountingMessages.EXPENSE_ID_REQUIRED }),
});

export type RemoveReceiptImageDto = z.infer<typeof removeReceiptImageSchema>;

// Categories
export const categorySchema = z.object({
  name: z
    .string({ error: CategoriesMessages.NAME_REQUIRED })
    .min(1, { error: CategoriesMessages.NAME_REQUIRED }),
  description: z.string().optional(),
});

export type CreateCategoryDto = z.infer<typeof categorySchema>;

export const updateCategorySchema = categorySchema.partial();

export type UpdateCategoryDto = z.infer<typeof updateCategorySchema>;

// Subcategories
export const subcategorySchema = z.object({
  name: z
    .string({ error: CategoriesMessages.NAME_REQUIRED })
    .min(1, { error: CategoriesMessages.NAME_REQUIRED }),
  categoryId: z.uuid({ error: AccountingMessages.CATEGORY_ID_REQUIRED }),
});

export type CreateSubcategoryDto = z.infer<typeof subcategorySchema>;

export const updateSubcategorySchema = subcategorySchema.partial();

export type UpdateSubcategoryDto = z.infer<typeof updateSubcategorySchema>;

// Reports
export const createReportSchema = z.object({
  startDate: z
    .string({ error: AccountingMessages.REPORT_START_REQUIRED })
    .min(1, { error: AccountingMessages.REPORT_START_REQUIRED }),
  endDate: z
    .string({ error: AccountingMessages.REPORT_END_REQUIRED })
    .min(1, { error: AccountingMessages.REPORT_END_REQUIRED }),
});

export type CreateReportDto = z.infer<typeof createReportSchema>;

export const updateReportSchema = createReportSchema.partial();

export type UpdateReportDto = z.infer<typeof updateReportSchema>;
