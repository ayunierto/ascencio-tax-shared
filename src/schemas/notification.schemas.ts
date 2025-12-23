import { z } from 'zod';
import { CommonMessages } from '../i18n';

// Notification - Appointment Details
export const appointmentDetailsSchema = z.object({
  clientName: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  clientEmail: z
    .email({ error: CommonMessages.VALIDATION_EMAIL })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  clientPhoneNumber: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  staffName: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  appointmentDate: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  appointmentTime: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  location: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  serviceName: z
    .string({ error: CommonMessages.VALIDATION_STRING })
    .nonempty({ error: CommonMessages.VALIDATION_REQUIRED }),
  meetingLink: z.url({ error: CommonMessages.VALIDATION_URL }).optional(),
});

export type AppointmentDetailsRequest = z.infer<
  typeof appointmentDetailsSchema
>;
