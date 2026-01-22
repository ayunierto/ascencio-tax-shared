import { z } from 'zod';
export declare const createLogSchema: z.ZodObject<{
    description: z.ZodString;
}, z.core.$strip>;
export type CreateLogRequest = z.infer<typeof createLogSchema>;
//# sourceMappingURL=logs.schemas.d.ts.map