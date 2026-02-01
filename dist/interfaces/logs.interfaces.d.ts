import { User } from './auth.interfaces';
import { PaginatedResponse } from './common.interfaces';
export interface Log {
    id: string;
    description: string;
    userId: string;
    createdAt: string;
    user?: User;
}
export type LogResponse = Omit<Log, 'user'>;
export type LogsResponse = PaginatedResponse<LogResponse>;
//# sourceMappingURL=logs.interfaces.d.ts.map