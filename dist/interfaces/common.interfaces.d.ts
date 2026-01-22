/**
 * Common interfaces and types used across all modules
 */
export interface PaginatedResponse<T> {
    total: number;
    pages: number;
    items: T[];
}
export interface MessageResponse {
    message: string;
    statusCode?: number;
    error?: string;
}
export interface SuccessResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
}
export interface ErrorResponse {
    success: false;
    error: string;
    statusCode: number;
    details?: Record<string, any>;
}
export interface ServerException {
    message: string;
    error: string;
    statusCode?: number;
}
//# sourceMappingURL=common.interfaces.d.ts.map