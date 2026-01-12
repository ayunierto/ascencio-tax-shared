import { z } from 'zod';
import { ValidationMessages as ValMsgs } from '../i18n';

// Blog Posts
export const createPostSchema = z.object({
  title: z
    .string({ error: ValMsgs.STRING })
    .nonempty({ error: ValMsgs.REQUIRED }),
  url: z.url({ error: ValMsgs.URL }),
});

export type CreatePostRequest = z.infer<typeof createPostSchema>;

export const updatePostSchema = createPostSchema.partial();

export type UpdatePostRequest = z.infer<typeof updatePostSchema>;
