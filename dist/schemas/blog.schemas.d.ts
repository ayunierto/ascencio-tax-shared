import { z } from 'zod';
export declare const createPostSchema: z.ZodObject<{
    title: z.ZodString;
    url: z.ZodURL;
}, z.core.$strip>;
export type CreatePostRequest = z.infer<typeof createPostSchema>;
export declare const updatePostSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodURL>;
}, z.core.$strip>;
export type UpdatePostRequest = z.infer<typeof updatePostSchema>;
//# sourceMappingURL=blog.schemas.d.ts.map