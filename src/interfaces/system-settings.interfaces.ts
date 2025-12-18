import { PaginatedResponse } from './common.interfaces';

// System Settings Entity
export interface SystemSetting {
  id: string;
  key: string;
  value?: string | null;
  type: string;
  updatedAt: Date;
}

// Response type (Create/Update DTOs are in schemas)
export type SystemSettingResponse = SystemSetting;
export type SystemSettingsResponse = PaginatedResponse<SystemSettingResponse>;
