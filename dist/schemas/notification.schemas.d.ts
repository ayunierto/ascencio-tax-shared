import { z } from 'zod';
export declare const appointmentDetailsSchema: z.ZodObject<{
    clientName: z.ZodString;
    clientEmail: z.ZodEmail;
    clientPhoneNumber: z.ZodString;
    staffName: z.ZodString;
    appointmentDate: z.ZodString;
    appointmentTime: z.ZodString;
    location: z.ZodString;
    serviceName: z.ZodString;
    meetingLink: z.ZodOptional<z.ZodURL>;
}, z.core.$strip>;
export type AppointmentDetailsRequest = z.infer<typeof appointmentDetailsSchema>;
//# sourceMappingURL=notification.schemas.d.ts.map