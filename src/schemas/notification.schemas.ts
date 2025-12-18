import { z } from 'zod';

// Notification - Appointment Details
export const appointmentDetailsSchema = z.object({
  clientName: z.string(),
  clientEmail: z.email(),
  clientPhoneNumber: z.string(),
  staffName: z.string(),
  appointmentDate: z.string(),
  appointmentTime: z.string(),
  location: z.string(),
  serviceName: z.string(),
  meetingLink: z.url().optional(),
});

export type AppointmentDetailsDto = z.infer<typeof appointmentDetailsSchema>;
