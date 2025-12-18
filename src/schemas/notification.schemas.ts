import { z } from 'zod';
import { NotificationMessages } from '../i18n';

// Notification - Appointment Details
export const appointmentDetailsSchema = z.object({
  clientName: z
    .string({ error: NotificationMessages.CLIENT_NAME_REQUIRED })
    .min(1, { error: NotificationMessages.CLIENT_NAME_REQUIRED }),
  clientEmail: z
    .email({ error: NotificationMessages.CLIENT_EMAIL_INVALID })
    .nonempty({ error: NotificationMessages.CLIENT_EMAIL_INVALID }),
  clientPhoneNumber: z
    .string({ error: NotificationMessages.CLIENT_PHONE_REQUIRED })
    .min(1, { error: NotificationMessages.CLIENT_PHONE_REQUIRED }),
  staffName: z
    .string({ error: NotificationMessages.STAFF_NAME_REQUIRED })
    .min(1, { error: NotificationMessages.STAFF_NAME_REQUIRED }),
  appointmentDate: z
    .string({ error: NotificationMessages.APPOINTMENT_DATE_REQUIRED })
    .min(1, { error: NotificationMessages.APPOINTMENT_DATE_REQUIRED }),
  appointmentTime: z
    .string({ error: NotificationMessages.APPOINTMENT_TIME_REQUIRED })
    .min(1, { error: NotificationMessages.APPOINTMENT_TIME_REQUIRED }),
  location: z
    .string({ error: NotificationMessages.LOCATION_REQUIRED })
    .min(1, { error: NotificationMessages.LOCATION_REQUIRED }),
  serviceName: z
    .string({ error: NotificationMessages.SERVICE_NAME_REQUIRED })
    .min(1, { error: NotificationMessages.SERVICE_NAME_REQUIRED }),
  meetingLink: z
    .url({ error: NotificationMessages.MEETING_LINK_INVALID })
    .optional(),
});

export type AppointmentDetailsDto = z.infer<typeof appointmentDetailsSchema>;
