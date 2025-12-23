import { z } from 'zod';
import { CommonMessages } from '../i18n';

// Blog Posts
export const createPostSchema = z.object({
  title: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  url: z.url({ error: CommonMessages.VALIDATION_URL }),
});

export type CreatePostRequest = z.infer<typeof createPostSchema>;

export const updatePostSchema = createPostSchema.partial();

export type UpdatePostRequest = z.infer<typeof updatePostSchema>;
