import { User } from './auth.interfaces';
import { Category, Subcategory } from './categories.interfaces';
import { PaginatedResponse } from './common.interfaces';

// Expense Entity
export interface Expense {
  id: string;
  merchant: string;
  date: string;
  total: number;
  tax: number;
  imageUrl?: string | null;
  notes?: string | null;
  categoryId: string;
  subcategoryId?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  category?: Category;
  subcategory?: Subcategory;
  user?: User;
}

// Response types
export type ExpenseResponse = Expense;
export type ExpensesResponse = PaginatedResponse<ExpenseResponse>;
