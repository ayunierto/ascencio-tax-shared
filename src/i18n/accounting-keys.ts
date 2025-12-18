export const AccountingMessages = {
  MERCHANT_REQUIRED: 'merchantRequired',
  DATE_INVALID: 'dateInvalid',
  TOTAL_INVALID: 'totalInvalid',
  TAX_INVALID: 'taxInvalid',
  IMAGE_URL_INVALID: 'imageUrlInvalid',
  CATEGORY_ID_REQUIRED: 'categoryIdRequired',
  SUBCATEGORY_ID_INVALID: 'subcategoryIdInvalid',
  REPORT_START_REQUIRED: 'reportStartRequired',
  REPORT_END_REQUIRED: 'reportEndRequired',
  EXPENSE_ID_REQUIRED: 'expenseIdRequired',
} as const;

export type AccountingMessageKey =
  (typeof AccountingMessages)[keyof typeof AccountingMessages];
