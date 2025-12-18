import z from 'zod';

// Staff Members
export const staffMemberSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  isActive: z.boolean(),
  services: z.array(z.string()).optional(),
  schedules: z.array(z.string()).optional(),
});

export type CreateStaffMemberDto = z.infer<typeof staffMemberSchema>;

export const updateStaffMemberSchema = staffMemberSchema.partial();

export type UpdateStaffMemberDto = z.infer<typeof updateStaffMemberSchema>;
