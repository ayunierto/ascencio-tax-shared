export type ZodIssueMessage = {
    messageKey: string;
    params?: Record<string, any>;
};
export declare const buildZodMessage: (messageKey: string, params?: Record<string, any>) => {
    message: string;
};
export declare const parseZodIssueMessage: (message?: string) => ZodIssueMessage;
//# sourceMappingURL=zod.d.ts.map