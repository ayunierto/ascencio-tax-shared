import z from 'zod';

export const createEmployeeSchema = z.object({});

export type CreateEmployeeRequest = z.infer<typeof createEmployeeSchema>;

export const updateEmployeeSchema = createEmployeeSchema.partial();

export type UpdateEmployeeRequest = z.infer<typeof updateEmployeeSchema>;
