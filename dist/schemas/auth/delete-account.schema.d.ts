import z from 'zod';
export declare const deleteAccountSchema: z.ZodObject<{
    password: z.ZodString;
}, z.core.$strip>;
export type DeleteAccountRequest = z.infer<typeof deleteAccountSchema>;
//# sourceMappingURL=delete-account.schema.d.ts.map