export const BlogMessages = {
  TITLE_REQUIRED: 'titleRequired',
  URL_INVALID: 'urlInvalid',
} as const;

export type BlogMessageKey = (typeof BlogMessages)[keyof typeof BlogMessages];
