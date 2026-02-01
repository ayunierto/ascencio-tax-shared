import { User } from './auth.interfaces';
import { PaginatedResponse } from './common.interfaces';
import { AppointmentStatus, AppointmentSource } from './enums';
import { Service } from './services.interfaces';
import { StaffMember } from './staff-members.interfaces';
export interface Appointment {
    id: string;
    start: string;
    end: string;
    timeZone: string;
    status: AppointmentStatus;
    comments?: string;
    calendarEventId: string;
    zoomMeetingId: string;
    zoomMeetingLink?: string;
    source: AppointmentSource;
    cancellationReason?: string;
    cancelledAt?: string;
    cancelledBy?: string;
    serviceId: string;
    userId: string;
    staffMemberId: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
    service?: Service;
    user?: User;
    staffMember?: StaffMember;
}
export type AppointmentResponse = Omit<Appointment, 'service' | 'user' | 'staffMember'>;
export type AppointmentsResponse = PaginatedResponse<AppointmentResponse>;
export interface AvailabilitySlot {
    startTime: string;
    endTime: string;
    staffMemberId: string;
    staffName: string;
}
export interface AvailabilityResponse {
    serviceId: string;
    date: string;
    timeZone: string;
    availableSlots: AvailabilitySlot[];
}
//# sourceMappingURL=bookings.interfaces.d.ts.map