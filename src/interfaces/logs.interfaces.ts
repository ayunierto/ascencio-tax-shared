import { User } from './auth.interfaces';
import { PaginatedResponse } from './common.interfaces';

// Logs Entity
export interface Log {
  id: string;
  description: string;
  userId: string;
  createdAt: string;
  user?: User;
}

// Response types (Create DTOs are in schemas)
export type LogResponse = Omit<Log, 'user'>;
export type LogsResponse = PaginatedResponse<LogResponse>;
