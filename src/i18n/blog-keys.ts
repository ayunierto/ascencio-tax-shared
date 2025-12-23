export const BlogMessages = {} as const;

export type BlogMessageKey = (typeof BlogMessages)[keyof typeof BlogMessages];
