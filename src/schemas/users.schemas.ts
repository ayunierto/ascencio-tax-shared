import { z } from 'zod';
import { CommonMessages, UsersMessages } from '../i18n';
import {
  countryCodeSchema,
  firstNameSchema,
  lastNameSchema,
  phoneNumberSchema,
} from './common.schemas';
import { emailSchema, passwordSchema } from './auth';

// Users
export const createUserSchema = z.object({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  email: emailSchema,
  countryCode: countryCodeSchema,
  phoneNumber: phoneNumberSchema,
  locale: z.string().optional(),
  password: passwordSchema,
  roles: z
    .array(z.string(), { error: CommonMessages.VALIDATION_ARRAY })
    .optional(),
  isActive: z.boolean({ error: CommonMessages.VALIDATION_BOOLEAN }).optional(),
});

export type CreateUserRequest = z.infer<typeof createUserSchema>;

export const updateUserSchema = createUserSchema.partial();

export type UpdateUserRequest = z.infer<typeof updateUserSchema>;

export const updateProfileSchema = z.object({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  countryCode: countryCodeSchema,
  phoneNumber: phoneNumberSchema.optional(),
  password: passwordSchema.optional(),
});

export type UpdateProfileRequest = z.infer<typeof updateProfileSchema>;
