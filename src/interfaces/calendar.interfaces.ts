import { PaginatedResponse } from './common.interfaces';
import { CalendarSourceType, CalendarStatus } from './enums';

// Calendar Events Entity
export interface CalendarEvent {
  id: string;
  summary: string;
  description?: string;
  location?: string;
  start: Date;
  end: Date;
  timeZone: string;
  staffMemberId?: string;
  serviceId?: string;
  sourceType: CalendarSourceType;
  sourceId?: string;
  externalEventId?: string;
  status: CalendarStatus;
  createdAt: Date;
  updatedAt: Date;
}

// Response type (Create/Update DTOs are in schemas)
export type CalendarEventResponse = CalendarEvent;
export type CalendarEventsResponse = PaginatedResponse<CalendarEventResponse>;
