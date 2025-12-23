import { PaginatedResponse } from '../common.interfaces';
import { SimpleUser } from '../simple-types.interfaces';

// Re-export from categories to avoid duplication
export type {
  Category,
  Subcategory,
  CategoryResponse,
  SubcategoryResponse,
  CategoriesResponse,
  SubcategoriesResponse,
} from '../categories.interfaces';

// Re-export from expenses
export type {
  Expense,
  ExpenseResponse,
  ExpensesResponse,
} from '../expenses.interfaces';

// Company Entity
export interface Company {
  id: string;
  name: string;
  legalName?: string;
  businessNumber?: string;
  address?: string;
  city?: string;
  province?: string;
  postalCode?: string;
  phone?: string;
  email?: string;
  payrollAccountNumber?: string;
  logoUrl?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  user?: SimpleUser;
}

export type CompanyResponse = Omit<Company, 'user'>;
export type CompaniesResponse = PaginatedResponse<CompanyResponse>;

// Reports Entity
export interface Report {
  id: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  user?: SimpleUser;
  summary?: {
    totalExpenses: number;
    totalTax: number;
    expensesByCategory: Record<string, number>;
  };
}

// Response types (Create/Update DTOs are in schemas)
export type ReportResponse = Omit<Report, 'user'>;
export type ReportsResponse = PaginatedResponse<ReportResponse>;
