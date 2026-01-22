/**
 * Simple/Minimal versions of entities for use in nested relations
 * These prevent circular dependencies and reduce payload size
 * They contain all fields EXCEPT relations/arrays
 */
import { User } from './auth.interfaces';
import { Appointment } from './bookings.interfaces';
export type SimpleUser = Omit<User, 'verificationCode' | 'passwordResetCode' | 'verificationCodeExpiresAt' | 'passwordResetExpiresAt'>;
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
export interface SimpleStaffMember {
    id: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
}
export interface SimpleCategory {
    id: string;
    name: string;
    description?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
export interface SimpleSubcategory {
    id: string;
    name: string;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface SimplePost {
    id: string;
    title: string;
    url: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}
export type SimpleAppointment = Appointment;
export interface SimpleSchedule {
    id: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    createdAt: Date;
    updatedAt: Date;
}
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
export interface SimpleLog {
    id: string;
    description: string;
    userId: string;
    createdAt: Date;
}
export interface SimpleReport {
    id: string;
    userId: string;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
}
export interface SimpleSystemSetting {
    id: string;
    key: string;
    value?: string | null;
    type: string;
    updatedAt: Date;
}
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
//# sourceMappingURL=simple-types.interfaces.d.ts.map