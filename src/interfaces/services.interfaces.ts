import { Appointment } from './bookings.interfaces';
import { PaginatedResponse } from './common.interfaces';
import { StaffMember } from './staff-members.interfaces';

// Service Entity
export interface Service {
  id: string;
  name: string;
  description: string;
  address: string;
  durationMinutes: number;
  isAvailableOnline: boolean;
  imageUrl?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  staffMembers?: StaffMember[];
  appointments?: Appointment[];
}

// Response type (Create/Update DTOs are in schemas)
export type ServiceResponse = Service;
export type ServicesResponse = PaginatedResponse<ServiceResponse>;
