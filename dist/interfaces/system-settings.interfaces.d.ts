import { PaginatedResponse } from './common.interfaces';
export interface SystemSetting {
    id: string;
    key: string;
    value?: string | null;
    type: string;
    updatedAt: Date;
}
export type SystemSettingResponse = SystemSetting;
export type SystemSettingsResponse = PaginatedResponse<SystemSettingResponse>;
//# sourceMappingURL=system-settings.interfaces.d.ts.map