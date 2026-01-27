import z from "zod";
export declare const signInSchema: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export type SignInRequest = z.infer<typeof signInSchema>;
//# sourceMappingURL=sign-in.schema.d.ts.map