export const CompaniesMessages = {
  // Company validation messages
} as const;

export type CompaniesMessageKey =
  (typeof CompaniesMessages)[keyof typeof CompaniesMessages];
