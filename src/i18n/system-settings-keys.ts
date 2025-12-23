export const SystemSettingsMessages = {} as const;

export type SystemSettingsMessageKey =
  (typeof SystemSettingsMessages)[keyof typeof SystemSettingsMessages];
