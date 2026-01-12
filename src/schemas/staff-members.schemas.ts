import { z } from 'zod';
import { ValidationMessages as ValMsgs } from '../i18n';

// Staff Members
export const staffMemberSchema = z.object({
  firstName: z
    .string({ error: ValMsgs.STRING })
    .nonempty({ error: ValMsgs.REQUIRED }),
  lastName: z
    .string({ error: ValMsgs.STRING })
    .nonempty({ error: ValMsgs.REQUIRED }),
  isActive: z.boolean({ error: ValMsgs.BOOLEAN }),
  services: z.array(z.string()).optional(),
  schedules: z.array(z.string()).optional(),
});

export type CreateStaffMemberRequest = z.infer<typeof staffMemberSchema>;

export const updateStaffMemberSchema = staffMemberSchema.partial();

export type UpdateStaffMemberRequest = z.infer<typeof updateStaffMemberSchema>;
