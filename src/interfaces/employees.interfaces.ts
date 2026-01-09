import { Company } from './companies.interfaces';

export interface Employee {
  id: string;
  userId: string;
  companyId?: string;
  company?: Company;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  province?: string;
  postalCode?: string;
  position?: string;
  hourlyRate?: number;
  salary?: number;
  sin?: string;
  startDate?: string;
  endDate?: string;
  isActive: boolean;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}
