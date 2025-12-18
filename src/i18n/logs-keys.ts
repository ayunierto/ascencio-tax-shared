export const LogsMessages = {
  DESCRIPTION_REQUIRED: 'descriptionRequired',
} as const;

export type LogsMessageKey = (typeof LogsMessages)[keyof typeof LogsMessages];
