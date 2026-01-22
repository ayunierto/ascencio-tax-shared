import { z } from 'zod';
export declare const createUserSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodEmail;
    countryCode: z.ZodString;
    phoneNumber: z.ZodString;
    locale: z.ZodOptional<z.ZodString>;
    password: z.ZodString;
    roles: z.ZodOptional<z.ZodArray<z.ZodString>>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateUserRequest = z.infer<typeof createUserSchema>;
export declare const updateUserSchema: z.ZodObject<{
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodEmail>;
    countryCode: z.ZodOptional<z.ZodString>;
    phoneNumber: z.ZodOptional<z.ZodString>;
    locale: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    password: z.ZodOptional<z.ZodString>;
    roles: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    isActive: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
export type UpdateUserRequest = z.infer<typeof updateUserSchema>;
export declare const updateProfileSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    countryCode: z.ZodString;
    phoneNumber: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UpdateProfileRequest = z.infer<typeof updateProfileSchema>;
//# sourceMappingURL=users.schemas.d.ts.map