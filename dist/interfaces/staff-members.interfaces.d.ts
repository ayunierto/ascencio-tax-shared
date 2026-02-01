import { Appointment } from './bookings.interfaces';
import { PaginatedResponse } from './common.interfaces';
import { Service } from './services.interfaces';
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
export interface Schedule {
    id: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    createdAt: string;
    updatedAt: string;
}
export type StaffMemberResponse = Omit<StaffMember, 'services' | 'schedules' | 'appointments'>;
export type StaffMembersResponse = PaginatedResponse<StaffMemberResponse>;
//# sourceMappingURL=staff-members.interfaces.d.ts.map