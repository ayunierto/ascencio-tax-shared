import { PaginatedResponse } from './common.interfaces';
import { SimpleUser } from './simple-types.interfaces';

// Blog Posts - Entity
export interface Post {
  id: string;
  title: string;
  url: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  user?: SimpleUser;
}

// Response types (Create/Update DTOs are in schemas)
export type PostResponse = Omit<Post, 'user'>;
export type PostsResponse = PaginatedResponse<PostResponse>;
