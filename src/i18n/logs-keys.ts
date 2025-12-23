export const LogsMessages = {} as const;

export type LogsMessageKey = (typeof LogsMessages)[keyof typeof LogsMessages];
