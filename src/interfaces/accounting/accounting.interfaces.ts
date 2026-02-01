import { User } from '../auth.interfaces';

// Re-export from expenses
export type {
  Expense,
  ExpenseResponse,
  ExpensesResponse,
} from '../expenses.interfaces';

// Reports Entity
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
