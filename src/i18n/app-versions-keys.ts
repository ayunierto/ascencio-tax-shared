export const AppVersionsMessages = {
  PLATFORM_REQUIRED: 'platformRequired',
  MIN_SUPPORTED_REQUIRED: 'minSupportedRequired',
  LATEST_REQUIRED: 'latestRequired',
  FORCE_UPDATE_REQUIRED: 'forceUpdateRequired',
} as const;

export type AppVersionsMessageKey =
  (typeof AppVersionsMessages)[keyof typeof AppVersionsMessages];
