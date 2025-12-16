// Staff Member Interface
export interface StaffMember {
  id: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

// Service Interface
export interface Service {
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
  staffMembers?: StaffMember[];
}

// DTOs
export interface CreateServiceDto {
  name: string;
  description?: string;
  address?: string;
  durationMinutes?: number;
  isAvailableOnline?: boolean;
  imageUrl?: string;
  isActive?: boolean;
  staffMemberIds?: string[];
}

export interface UpdateServiceDto extends Partial<CreateServiceDto> {}

export interface ServiceResponse extends Service {}

export interface ServicesListResponse {
  services: Service[];
  total: number;
}
