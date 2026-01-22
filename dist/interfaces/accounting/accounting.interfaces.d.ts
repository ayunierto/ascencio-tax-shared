import { PaginatedResponse } from '../common.interfaces';
import { SimpleUser } from '../simple-types.interfaces';
export type { Category, Subcategory, CategoryResponse, SubcategoryResponse, CategoriesResponse, SubcategoriesResponse, } from '../categories.interfaces';
export type { Expense, ExpenseResponse, ExpensesResponse, } from '../expenses.interfaces';
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
export type ReportResponse = Omit<Report, 'user'>;
export type ReportsResponse = PaginatedResponse<ReportResponse>;
//# sourceMappingURL=accounting.interfaces.d.ts.map