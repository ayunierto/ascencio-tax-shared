import { PaginatedResponse } from './common.interfaces';
import { SimpleService, SimpleAppointment } from './simple-types.interfaces';

// StaffMember Entity
export interface StaffMember {
  id: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  services?: SimpleService[];
  schedules?: Schedule[];
  appointments?: SimpleAppointment[];
}

// Simple types without relations
export interface Schedule {
  id: string;
  dayOfWeek: number; // 0=Sunday, 6=Saturday
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  createdAt: Date;
  updatedAt: Date;
}

// Response types
export type StaffMemberResponse = Omit<
  StaffMember,
  'services' | 'schedules' | 'appointments'
>;
export type StaffMembersResponse = PaginatedResponse<StaffMemberResponse>;
