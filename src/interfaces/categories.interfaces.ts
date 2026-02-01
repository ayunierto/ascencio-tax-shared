import { Expense } from './expenses.interfaces';

export interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
  category?: Category;
  expenses?: Expense[];
}

export interface Category {
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  subcategories?: Subcategory[];
  expenses?: Expense[];
}
