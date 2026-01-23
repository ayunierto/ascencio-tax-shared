import { z } from 'zod';
import { ValidationMessages as ValMsgs } from '../i18n';
import {
  countryCodeSchema,
  emailSchema,
  firstNameSchema,
  lastNameSchema,
  phoneNumberSchema,
} from './common.schemas';
import { passwordSchema } from './auth';

// Users
export const createUserSchema = z.object({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  email: emailSchema,
  countryCode: countryCodeSchema,
  phoneNumber: phoneNumberSchema,
  locale: z.string().optional(),
  password: passwordSchema,
  roles: z.array(z.string(), { error: ValMsgs.ARRAY }).optional(),
  isActive: z.boolean({ error: ValMsgs.BOOLEAN }).optional(),
});

export type CreateUserRequest = z.infer<typeof createUserSchema>;

export const updateUserSchema = createUserSchema.partial();

export type UpdateUserRequest = z.infer<typeof updateUserSchema>;

export const updateProfileSchema = z.object({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  countryCode: countryCodeSchema,
  phoneNumber: z.union([phoneNumberSchema, z.literal('')]).optional(),
  password: z.union([passwordSchema, z.literal('')]).optional(),
});

export type UpdateProfileRequest = z.infer<typeof updateProfileSchema>;
