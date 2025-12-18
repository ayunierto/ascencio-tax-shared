import { z } from 'zod';
import { AuthMessages, CommonMessages } from '../i18n';

export const signinSchema = z.object({
  email: z.email({ error: AuthMessages.INVALID_EMAIL }).nonempty({
    error: AuthMessages.EMAIL_REQUIRED,
  }),
  password: z
    .string()
    .min(8, { error: AuthMessages.PASSWORD_REQUIRED })
    .nonempty({ error: AuthMessages.PASSWORD_REQUIRED }),
});

export type SigninDto = z.infer<typeof signinSchema>;

export const signUpSchema = z.object({
  firstName: z
    .string()
    .min(3, { error: AuthMessages.FIRST_NAME_REQUIRED })
    .nonempty({ error: AuthMessages.FIRST_NAME_REQUIRED }),
  lastName: z
    .string()
    .min(3, { error: AuthMessages.LAST_NAME_REQUIRED })
    .nonempty({ error: AuthMessages.LAST_NAME_REQUIRED }),
  email: z.email({ error: AuthMessages.INVALID_EMAIL }).nonempty({
    error: AuthMessages.EMAIL_REQUIRED,
  }),
  countryCode: z.string().optional(),
  phoneNumber: z.string().optional(),
  timeZone: z.string().nonempty({ error: AuthMessages.TIMEZONE_REQUIRED }),
  locale: z.string().optional(),
  password: z.string().min(6).nonempty(),
  confirmPassword: z.string().min(6).nonempty(),
});

export type SignUpDto = z.infer<typeof signUpSchema>;

export const verifyEmailCodeSchema = z.object({
  email: z.email({ error: AuthMessages.INVALID_EMAIL }).nonempty({
    error: AuthMessages.EMAIL_REQUIRED,
  }),
  code: z
    .string()
    .length(6, { error: CommonMessages.CODE_LENGTH })
    .nonempty({ error: CommonMessages.CODE_REQUIRED }),
});

export type VerifyEmailCodeDto = z.infer<typeof verifyEmailCodeSchema>;

export const forgotPasswordSchema = z.object({
  email: z.email({ error: AuthMessages.INVALID_EMAIL }).nonempty({
    error: AuthMessages.EMAIL_REQUIRED,
  }),
});

export type ForgotPasswordDto = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z.object({
  email: z.email({ error: AuthMessages.INVALID_EMAIL }).nonempty({
    error: AuthMessages.EMAIL_REQUIRED,
  }),
  code: z.string().length(6).nonempty(),
  newPassword: z
    .string()
    .min(6)
    .max(100)
    .nonempty({ error: AuthMessages.PASSWORD_REQUIRED }),
});

export type ResetPasswordDto = z.infer<typeof resetPasswordSchema>;

export const changePasswordSchema = z.object({
  currentPassword: z
    .string()
    .min(6)
    .max(100)
    .nonempty({ error: AuthMessages.PASSWORD_REQUIRED }),
  newPassword: z
    .string()
    .min(6)
    .max(100)
    .nonempty({ error: AuthMessages.PASSWORD_REQUIRED }),
});

export type ChangePasswordDto = z.infer<typeof changePasswordSchema>;

export const deleteAccountSchema = z.object({
  password: z
    .string()
    .min(6, { error: AuthMessages.PASSWORD_REQUIRED })
    .nonempty({ error: AuthMessages.PASSWORD_REQUIRED }),
});

export type DeleteAccountDto = z.infer<typeof deleteAccountSchema>;

export const updateProfileSchema = z.object({
  firstName: z.string().min(3).nonempty(),
  lastName: z.string().min(3).nonempty(),
  countryCode: z.string().optional(),
  phoneNumber: z.string().optional(),
  password: z.string().min(6).max(50).optional(),
});

export type UpdateProfileDto = z.infer<typeof updateProfileSchema>;

export const resendEmailVerificationCodeSchema = z.object({
  email: z.email({ error: AuthMessages.INVALID_EMAIL }).nonempty({
    error: AuthMessages.EMAIL_REQUIRED,
  }),
});

export type ResendEmailCodeDto = z.infer<
  typeof resendEmailVerificationCodeSchema
>;

export const resendResetPasswordCodeSchema = z.object({
  email: z.email({ error: AuthMessages.INVALID_EMAIL }).nonempty({
    error: AuthMessages.EMAIL_REQUIRED,
  }),
});

export type ResendResetPasswordCodeDto = z.infer<
  typeof resendResetPasswordCodeSchema
>;
