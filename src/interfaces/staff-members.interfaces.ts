import { Appointment } from './bookings.interfaces';
import { PaginatedResponse } from './common.interfaces';
import { Service } from './services.interfaces';

// StaffMember Entity
export interface StaffMember {
  id: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  services?: Service[];
  schedules?: Schedule[];
  appointments?: Appointment[];
}

// Simple types without relations
export interface Schedule {
  id: string;
  dayOfWeek: number; // 0=Sunday, 6=Saturday
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  createdAt: string;
  updatedAt: string;
}

// Response types
export type StaffMemberResponse = Omit<
  StaffMember,
  'services' | 'schedules' | 'appointments'
>;
export type StaffMembersResponse = PaginatedResponse<StaffMemberResponse>;
