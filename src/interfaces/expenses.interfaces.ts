import { PaginatedResponse } from './common.interfaces';
import {
  SimpleCategory,
  SimpleSubcategory,
  SimpleUser,
} from './simple-types.interfaces';

// Expense Entity
export interface Expense {
  id: string;
  merchant: string;
  date: Date;
  total: number;
  tax: number;
  imageUrl?: string | null;
  notes?: string | null;
  categoryId: string;
  subcategoryId?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  category?: SimpleCategory;
  subcategory?: SimpleSubcategory;
  user?: SimpleUser;
}

// Response types
export type ExpenseResponse = Expense;
export type ExpensesResponse = PaginatedResponse<ExpenseResponse>;
