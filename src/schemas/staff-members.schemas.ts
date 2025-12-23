import { z } from 'zod';
import { CommonMessages } from '../i18n';

// Staff Members
export const staffMemberSchema = z.object({
  firstName: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  lastName: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  isActive: z.boolean({ error: CommonMessages.VALIDATION_BOOLEAN }),
  services: z.array(z.string()).optional(),
  schedules: z.array(z.string()).optional(),
});

export type CreateStaffMemberRequest = z.infer<typeof staffMemberSchema>;

export const updateStaffMemberSchema = staffMemberSchema.partial();

export type UpdateStaffMemberRequest = z.infer<typeof updateStaffMemberSchema>;
