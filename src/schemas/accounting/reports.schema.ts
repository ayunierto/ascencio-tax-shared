import z from 'zod';
import { CommonMessages } from '../../i18n';

export const createReportSchema = z.object({
  startDate: z.date({ error: CommonMessages.VALIDATION_DATE }),

  endDate: z.date({ error: CommonMessages.VALIDATION_DATE }),
});

export type CreateReportRequest = z.infer<typeof createReportSchema>;

export const updateReportSchema = createReportSchema.partial();

export type UpdateReportRequest = z.infer<typeof updateReportSchema>;
