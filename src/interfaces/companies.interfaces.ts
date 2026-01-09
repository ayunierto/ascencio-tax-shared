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
  /** The full Cloudinary URL of the company logo */
  logoUrl?: string;
  /** The Cloudinary public_id for cleanup operations */
  logoPublicId?: string;
  /** Temporary media token for image upload (not persisted) */
  mediaToken?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}
