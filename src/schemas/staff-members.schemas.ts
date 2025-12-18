import { z } from 'zod';
import { StaffMembersMessages } from '../i18n';

// Staff Members
export const staffMemberSchema = z.object({
  firstName: z
    .string({ error: StaffMembersMessages.FIRST_NAME_REQUIRED })
    .min(3, { error: StaffMembersMessages.FIRST_NAME_REQUIRED }),
  lastName: z
    .string({ error: StaffMembersMessages.LAST_NAME_REQUIRED })
    .min(3, { error: StaffMembersMessages.LAST_NAME_REQUIRED }),
  isActive: z.boolean({ error: StaffMembersMessages.IS_ACTIVE_REQUIRED }),
  services: z.array(z.string()).optional(),
  schedules: z.array(z.string()).optional(),
});

export type CreateStaffMemberDto = z.infer<typeof staffMemberSchema>;

export const updateStaffMemberSchema = staffMemberSchema.partial();

export type UpdateStaffMemberDto = z.infer<typeof updateStaffMemberSchema>;
