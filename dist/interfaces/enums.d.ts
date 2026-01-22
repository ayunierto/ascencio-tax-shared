/**
 * Centralized enums and types used across all modules
 */
export declare enum AppPlatform {
    IOS = "ios",
    ANDROID = "android",
    WEB = "web",
    ALL = "all"
}
export type CalendarSourceType = 'appointment' | 'manual' | 'imported' | 'api';
export type CalendarStatus = 'confirmed' | 'cancelled';
export type AppointmentStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';
export type AppointmentSource = 'app' | 'admin' | 'imported' | 'api';
export declare enum UserRole {
    Admin = "admin",
    Staff = "staff",
    User = "user"
}
export type EntityStatus = 'active' | 'inactive' | 'deleted';
//# sourceMappingURL=enums.d.ts.map