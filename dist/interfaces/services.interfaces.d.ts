import { Appointment } from './bookings.interfaces';
import { PaginatedResponse } from './common.interfaces';
import { StaffMember } from './staff-members.interfaces';
export interface Service {
    id: string;
    name: string;
    description: string;
    address: string;
    durationMinutes: number;
    isAvailableOnline: boolean;
    imageUrl?: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
    staffMembers?: StaffMember[];
    appointments?: Appointment[];
}
export type ServiceResponse = Service;
export type ServicesResponse = PaginatedResponse<ServiceResponse>;
//# sourceMappingURL=services.interfaces.d.ts.map