import { PaginatedResponse } from './common.interfaces';
import {
  SimpleStaffMember,
  SimpleAppointment,
} from './simple-types.interfaces';

// Service Entity
export interface Service {
  id: string;
  name: string;
  description: string;
  address?: string;
  durationMinutes?: number;
  isAvailableOnline: boolean;
  imageUrl?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  staffMembers?: SimpleStaffMember[];
  appointments?: SimpleAppointment[];
}

// Response type (Create/Update DTOs are in schemas)
export type ServiceResponse = Service;
export type ServicesResponse = PaginatedResponse<ServiceResponse>;
