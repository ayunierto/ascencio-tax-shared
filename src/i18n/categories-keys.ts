export const CategoriesMessages = {
  NAME_REQUIRED: 'categoryNameRequired',
} as const;

export type CategoriesMessageKey =
  (typeof CategoriesMessages)[keyof typeof CategoriesMessages];
