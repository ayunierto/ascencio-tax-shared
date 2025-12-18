import { z } from 'zod';
import { BlogMessages } from '../i18n';

// Blog Posts
export const createPostSchema = z.object({
  title: z
    .string({ error: BlogMessages.TITLE_REQUIRED })
    .min(1, { error: BlogMessages.TITLE_REQUIRED }),
  url: z.url({ error: BlogMessages.URL_INVALID }),
});

export type CreatePostDto = z.infer<typeof createPostSchema>;

export const updatePostSchema = createPostSchema.partial();

export type UpdatePostDto = z.infer<typeof updatePostSchema>;
