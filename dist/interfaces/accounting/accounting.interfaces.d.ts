import { User } from '../auth.interfaces';
export type { Expense, ExpenseResponse, ExpensesResponse, } from '../expenses.interfaces';
export interface Report {
    id: string;
    userId: string;
    startDate: string;
    endDate: string;
    createdAt: string;
    user?: User;
    summary?: {
        totalExpenses: number;
        totalTax: number;
        expensesByCategory: Record<string, number>;
    };
}
//# sourceMappingURL=accounting.interfaces.d.ts.map