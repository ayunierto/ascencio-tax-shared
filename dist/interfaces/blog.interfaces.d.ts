import { User } from './auth.interfaces';
export interface Post {
    id: string;
    title: string;
    url: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    user?: User;
}
//# sourceMappingURL=blog.interfaces.d.ts.map