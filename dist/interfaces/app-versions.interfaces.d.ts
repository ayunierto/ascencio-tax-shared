import { PaginatedResponse } from './common.interfaces';
import { AppPlatform } from './enums';
export interface AppVersion {
    id: number;
    platform: AppPlatform;
    minSupportedVersion: string;
    latestVersion: string;
    forceUpdate: boolean;
    releaseNotes?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export type AppVersionsResponse = PaginatedResponse<AppVersion>;
//# sourceMappingURL=app-versions.interfaces.d.ts.map