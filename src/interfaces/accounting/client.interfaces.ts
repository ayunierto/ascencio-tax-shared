export interface Client {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  province?: string;
  postalCode?: string;
  country?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  // For individuals
  dateOfBirth?: string;
  sin?: string;

  // For companies
  businessNumber?: string;
}
