import { SimpleUser, User } from './auth.interfaces';
import { PaginatedResponse } from './common.interfaces';

export type UserResponse = User;
export type UsersResponse = PaginatedResponse<SimpleUser>;
