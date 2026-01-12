import { z } from 'zod';
import { ValidationMessages as ValMsgs } from '../i18n';

// Notification - Appointment Details
export const appointmentDetailsSchema = z.object({
  clientName: z
    .string({ error: ValMsgs.STRING })
    .nonempty({ error: ValMsgs.REQUIRED }),
  clientEmail: z
    .email({ error: ValMsgs.EMAIL })
    .nonempty({ error: ValMsgs.REQUIRED }),
  clientPhoneNumber: z
    .string({ error: ValMsgs.STRING })
    .nonempty({ error: ValMsgs.REQUIRED }),
  staffName: z
    .string({ error: ValMsgs.STRING })
    .nonempty({ error: ValMsgs.REQUIRED }),
  appointmentDate: z
    .string({ error: ValMsgs.STRING })
    .nonempty({ error: ValMsgs.REQUIRED }),
  appointmentTime: z
    .string({ error: ValMsgs.STRING })
    .nonempty({ error: ValMsgs.REQUIRED }),
  location: z
    .string({ error: ValMsgs.STRING })
    .nonempty({ error: ValMsgs.REQUIRED }),
  serviceName: z
    .string({ error: ValMsgs.STRING })
    .nonempty({ error: ValMsgs.REQUIRED }),
  meetingLink: z.url({ error: ValMsgs.URL }).optional(),
});

export type AppointmentDetailsRequest = z.infer<
  typeof appointmentDetailsSchema
>;
