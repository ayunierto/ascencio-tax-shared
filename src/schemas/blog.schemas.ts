import { z } from 'zod';

// Blog Posts
export const createPostSchema = z.object({
  title: z.string().min(1),
  url: z.url(),
});

export type CreatePostDto = z.infer<typeof createPostSchema>;

export const updatePostSchema = createPostSchema.partial();

export type UpdatePostDto = z.infer<typeof updatePostSchema>;
