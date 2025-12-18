/**
 * Simple/Minimal versions of entities for use in nested relations
 * These prevent circular dependencies and reduce payload size
 * They contain all fields EXCEPT relations/arrays
 */

import { User } from './auth.interfaces';
import { Appointment } from './bookings.interfaces';

// SimpleUser - from User interface
export type SimpleUser = Omit<
  User,
  | 'verificationCode'
  | 'passwordResetCode'
  | 'verificationCodeExpiresAt'
  | 'passwordResetExpiresAt'
>;

// SimpleService - from Service interface
export interface SimpleService {
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
}

// SimpleStaffMember - from StaffMember interface
export interface SimpleStaffMember {
  id: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

// SimpleCategory - from Category interface
export interface SimpleCategory {
  id: string;
  name: string;
  description?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// SimpleSubcategory - from Subcategory interface
export interface SimpleSubcategory {
  id: string;
  name: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
}

// SimplePost - from Post interface
export interface SimplePost {
  id: string;
  title: string;
  url: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

// SimpleAppointment - from Appointment interface
export type SimpleAppointment = Appointment;

// SimpleSchedule - from Schedule interface
export interface SimpleSchedule {
  id: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  createdAt: Date;
  updatedAt: Date;
}

// SimpleExpense - from Expense interface
export interface SimpleExpense {
  id: string;
  merchant: string;
  date: Date;
  total: number;
  tax: number;
  imageUrl?: string | null;
  notes?: string | null;
  categoryId: string;
  subcategoryId?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

// SimpleLog - from Log interface
export interface SimpleLog {
  id: string;
  description: string;
  userId: string;
  createdAt: Date;
}

// SimpleReport - from Report interface
export interface SimpleReport {
  id: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
}

// SimpleSystemSetting - from SystemSetting interface
export interface SimpleSystemSetting {
  id: string;
  key: string;
  value?: string | null;
  type: string;
  updatedAt: Date;
}

// SimpleCalendarEvent - from CalendarEvent interface
export interface SimpleCalendarEvent {
  id: string;
  summary: string;
  description?: string;
  location?: string;
  start: Date;
  end: Date;
  timeZone: string;
  staffMemberId?: string;
  serviceId?: string;
  createdAt: Date;
  updatedAt: Date;
}
