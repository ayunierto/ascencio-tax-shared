import { z } from 'zod';

// Users
export const createUserSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.email(),
  countryCode: z.string().optional(),
  phoneNumber: z.string().optional(),
  timeZone: z.string(),
  locale: z.string().optional(),
  password: z.string().min(6).max(100),
  confirmPassword: z.string().min(6).max(100),
  roles: z.array(z.string()).optional(),
  isActive: z.boolean().optional(),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;

export const updateUserSchema = createUserSchema.partial();

export type UpdateUserDto = z.infer<typeof updateUserSchema>;
