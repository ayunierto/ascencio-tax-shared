export const AppVersionsMessages = {} as const;

export type AppVersionsMessageKey =
  (typeof AppVersionsMessages)[keyof typeof AppVersionsMessages];
