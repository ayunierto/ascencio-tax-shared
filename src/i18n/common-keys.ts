export const CommonMessages = {
  INTERNAL_SERVER_ERROR: 'internalServerError',
  INVALID_CODE: 'invalidCode',
  ACCESS_DENIED: 'accessDenied',

  RESOURCE_NOT_FOUND: 'resourceNotFound',
} as const;

export type CommonMessageKey =
  (typeof CommonMessages)[keyof typeof CommonMessages];
