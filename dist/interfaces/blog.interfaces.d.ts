import { PaginatedResponse } from './common.interfaces';
import { SimpleUser } from './simple-types.interfaces';
export interface Post {
    id: string;
    title: string;
    url: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    user?: SimpleUser;
}
export type PostResponse = Omit<Post, 'user'>;
export type PostsResponse = PaginatedResponse<PostResponse>;
//# sourceMappingURL=blog.interfaces.d.ts.map