/**
 * Centralized enums and types used across all modules
 */

// App Platform
export enum AppPlatform {
  IOS = 'ios',
  ANDROID = 'android',
  WEB = 'web',
  ALL = 'all',
}

// Calendar
export type CalendarSourceType = 'appointment' | 'manual' | 'imported' | 'api';
export type CalendarStatus = 'confirmed' | 'cancelled';

// Appointment
export type AppointmentStatus =
  | 'pending'
  | 'confirmed'
  | 'cancelled'
  | 'completed';
export type AppointmentSource = 'app' | 'admin' | 'imported' | 'api';

// User Roles (from auth)
export enum UserRole {
  Admin = 'admin',
  Staff = 'staff',
  User = 'user',
}

// Generic status
export type EntityStatus = 'active' | 'inactive' | 'deleted';
