import { PaginatedResponse } from './common.interfaces';
import { AppPlatform } from './enums';

// AppVersion Entity
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

// Response type (Create/Update DTOs are in schemas)
export type AppVersionsResponse = PaginatedResponse<AppVersion>;
