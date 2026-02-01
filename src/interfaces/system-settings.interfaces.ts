import { PaginatedResponse } from './common.interfaces';

// System Settings Entity
export interface SystemSetting {
  id: string;
  key: string;
  value?: string | null;
  type: string;
  updatedAt: string;
}
