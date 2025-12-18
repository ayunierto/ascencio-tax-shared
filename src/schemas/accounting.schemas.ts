import { z } from 'zod';

// Expenses
export const createExpenseSchema = z.object({
  merchant: z.string().min(1),
  date: z.iso.datetime(),
  total: z.number().multipleOf(0.01),
  tax: z.number().multipleOf(0.01),
  imageUrl: z.url().optional(),
  notes: z.string().optional(),
  categoryId: z.uuid(),
  subcategoryId: z.uuid().optional(),
});

export type CreateExpenseDto = z.infer<typeof createExpenseSchema>;

export const updateExpenseSchema = createExpenseSchema.partial();

export type UpdateExpenseDto = z.infer<typeof updateExpenseSchema>;

export const analyzeExpenseSchema = z.object({
  imageUrl: z.string().url(),
});

export type AnalyzeExpenseDto = z.infer<typeof analyzeExpenseSchema>;

export const removeReceiptImageSchema = z.object({
  expenseId: z.string().uuid(),
});

export type RemoveReceiptImageDto = z.infer<typeof removeReceiptImageSchema>;

// Categories
export const categorySchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
});

export type CreateCategoryDto = z.infer<typeof categorySchema>;

export const updateCategorySchema = categorySchema.partial();

export type UpdateCategoryDto = z.infer<typeof updateCategorySchema>;

// Subcategories
export const subcategorySchema = z.object({
  name: z.string().min(1),
  categoryId: z.string().uuid(),
});

export type CreateSubcategoryDto = z.infer<typeof subcategorySchema>;

export const updateSubcategorySchema = subcategorySchema.partial();

export type UpdateSubcategoryDto = z.infer<typeof updateSubcategorySchema>;

// Reports
export const createReportSchema = z.object({
  startDate: z.string(),
  endDate: z.string(),
});

export type CreateReportDto = z.infer<typeof createReportSchema>;

export const updateReportSchema = createReportSchema.partial();

export type UpdateReportDto = z.infer<typeof updateReportSchema>;
