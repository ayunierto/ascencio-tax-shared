import { User } from './auth.interfaces';
import { PaginatedResponse } from './common.interfaces';

// Blog Posts - Entity
export interface Post {
  id: string;
  title: string;
  url: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user?: User;
}
