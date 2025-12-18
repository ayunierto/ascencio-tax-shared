import { z } from 'zod';
import { UsersMessages } from '../i18n';

// Users
export const createUserSchema = z.object({
  firstName: z
    .string({ error: UsersMessages.FIRST_NAME_REQUIRED })
    .min(3, { error: UsersMessages.FIRST_NAME_REQUIRED }),
  lastName: z
    .string({ error: UsersMessages.LAST_NAME_REQUIRED })
    .min(3, { error: UsersMessages.LAST_NAME_REQUIRED }),
  email: z
    .email({ error: UsersMessages.INVALID_EMAIL })
    .nonempty({ error: UsersMessages.EMAIL_REQUIRED }),
  countryCode: z.string().optional(),
  phoneNumber: z.string().optional(),
  timeZone: z
    .string({ error: UsersMessages.TIMEZONE_REQUIRED })
    .min(1, { error: UsersMessages.TIMEZONE_REQUIRED }),
  locale: z.string().optional(),
  password: z
    .string({ error: UsersMessages.PASSWORD_REQUIRED })
    .min(6, { error: UsersMessages.PASSWORD_MIN_LENGTH })
    .max(100, { error: UsersMessages.PASSWORD_MAX_LENGTH }),
  confirmPassword: z
    .string({ error: UsersMessages.CONFIRM_PASSWORD_REQUIRED })
    .min(6, { error: UsersMessages.PASSWORD_MIN_LENGTH })
    .max(100, { error: UsersMessages.PASSWORD_MAX_LENGTH }),
  roles: z.array(z.string()).optional(),
  isActive: z.boolean().optional(),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;

export const updateUserSchema = createUserSchema.partial();

export type UpdateUserDto = z.infer<typeof updateUserSchema>;
