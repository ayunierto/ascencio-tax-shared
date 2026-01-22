import { PaginatedResponse } from './common.interfaces';
import { SimpleService, SimpleAppointment } from './simple-types.interfaces';
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
export interface Schedule {
    id: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    createdAt: Date;
    updatedAt: Date;
}
export type StaffMemberResponse = Omit<StaffMember, 'services' | 'schedules' | 'appointments'>;
export type StaffMembersResponse = PaginatedResponse<StaffMemberResponse>;
//# sourceMappingURL=staff-members.interfaces.d.ts.map