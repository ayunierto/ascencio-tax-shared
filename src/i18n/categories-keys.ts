export const CategoriesMessages = {
  //
} as const;

export type CategoriesMessageKey =
  (typeof CategoriesMessages)[keyof typeof CategoriesMessages];
