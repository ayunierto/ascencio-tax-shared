import { PaginatedResponse } from './common.interfaces';
import { SimpleUser } from './simple-types.interfaces';

// Logs Entity
export interface Log {
  id: string;
  description: string;
  userId: string;
  createdAt: Date;
  user?: SimpleUser;
}

// Response types (Create DTOs are in schemas)
export type LogResponse = Omit<Log, 'user'>;
export type LogsResponse = PaginatedResponse<LogResponse>;
