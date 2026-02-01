import { PaginatedResponse } from './common.interfaces';
import { CalendarSourceType, CalendarStatus } from './enums';

// Calendar Events Entity
export interface CalendarEvent {
  id: string;
  summary: string;
  description?: string;
  location?: string;
  start: string;
  end: string;
  timeZone: string;
  staffMemberId?: string;
  serviceId?: string;
  sourceType: CalendarSourceType;
  sourceId?: string;
  externalEventId?: string;
  status: CalendarStatus;
  createdAt: string;
  updatedAt: string;
}

// Response type (Create/Update DTOs are in schemas)
export type CalendarEventResponse = CalendarEvent;
export type CalendarEventsResponse = PaginatedResponse<CalendarEventResponse>;
