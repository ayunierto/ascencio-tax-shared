export const AccountingMessages = {
  //
} as const;

export type AccountingMessageKey =
  (typeof AccountingMessages)[keyof typeof AccountingMessages];
