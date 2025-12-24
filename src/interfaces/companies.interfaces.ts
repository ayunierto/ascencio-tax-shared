import { User } from './auth.interfaces';

export interface Company {
  id: string;
  users: User[];
  name: string;
  legalName: string;
  businessNumber: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
  email: string;
  payrollAccountNumber: string;
  logoUrl: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}
