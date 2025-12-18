export const SystemSettingsMessages = {
  KEY_REQUIRED: 'settingKeyRequired',
  VALUE_REQUIRED: 'settingValueRequired',
  TYPE_REQUIRED: 'settingTypeRequired',
} as const;

export type SystemSettingsMessageKey =
  (typeof SystemSettingsMessages)[keyof typeof SystemSettingsMessages];
