import { PaginatedResponse } from './common.interfaces';
import { AppointmentStatus, AppointmentSource } from './enums';
import { SimpleUser, SimpleService, SimpleStaffMember } from './simple-types.interfaces';
export interface Appointment {
    id: string;
    start: Date;
    end: Date;
    timeZone: string;
    status: AppointmentStatus;
    comments?: string;
    calendarEventId: string;
    zoomMeetingId: string;
    zoomMeetingLink?: string;
    source: AppointmentSource;
    cancellationReason?: string;
    cancelledAt?: Date;
    cancelledBy?: string;
    serviceId: string;
    userId: string;
    staffMemberId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    service?: SimpleService;
    user?: SimpleUser;
    staffMember?: SimpleStaffMember;
}
export type AppointmentResponse = Omit<Appointment, 'service' | 'user' | 'staffMember'>;
export type AppointmentsResponse = PaginatedResponse<AppointmentResponse>;
export interface AvailabilitySlot {
    startTime: Date;
    endTime: Date;
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