import { PaginatedResponse } from './common.interfaces';
import { CalendarSourceType, CalendarStatus } from './enums';
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
export type CalendarEventResponse = CalendarEvent;
export type CalendarEventsResponse = PaginatedResponse<CalendarEventResponse>;
//# sourceMappingURL=calendar.interfaces.d.ts.map