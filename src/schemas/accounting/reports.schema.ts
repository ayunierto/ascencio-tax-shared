import z from 'zod';
import { ValidationMessages as ValMsgs } from '../../i18n';

export const createReportSchema = z.object({
  startDate: z.date({ error: ValMsgs.DATE }),

  endDate: z.date({ error: ValMsgs.DATE }),
});

export type CreateReportRequest = z.infer<typeof createReportSchema>;

export const updateReportSchema = createReportSchema.partial();

export type UpdateReportRequest = z.infer<typeof updateReportSchema>;
