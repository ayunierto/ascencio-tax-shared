import { PaginatedResponse } from './common.interfaces';
import { SimpleUser } from './simple-types.interfaces';
export interface Log {
    id: string;
    description: string;
    userId: string;
    createdAt: Date;
    user?: SimpleUser;
}
export type LogResponse = Omit<Log, 'user'>;
export type LogsResponse = PaginatedResponse<LogResponse>;
//# sourceMappingURL=logs.interfaces.d.ts.map