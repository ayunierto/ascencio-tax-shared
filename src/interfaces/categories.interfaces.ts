import { PaginatedResponse } from './common.interfaces';
import {
  SimpleCategory,
  SimpleSubcategory,
  SimpleExpense,
} from './simple-types.interfaces';

export interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
  category?: SimpleCategory;
  expenses?: SimpleExpense[];
}

export interface Category {
  id: string;
  name: string;
  description?: string | null;
  createdAt: Date;
  updatedAt: Date;
  subcategories?: SimpleSubcategory[];
  expenses?: SimpleExpense[];
}

// Response types without relations to avoid circular dependencies
export type CategoryResponse = Omit<Category, 'subcategories' | 'expenses'>;
export type SubcategoryResponse = Omit<Subcategory, 'category' | 'expenses'>;

export type CategoriesResponse = PaginatedResponse<CategoryResponse>;
export type SubcategoriesResponse = PaginatedResponse<SubcategoryResponse>;
