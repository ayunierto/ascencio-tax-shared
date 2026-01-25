import z from "zod";
import { ValidationMessages as ValMsgs } from "../../i18n";
import { emailSchema } from "../common.schemas";
import { phoneNumberSchema } from "../common.schemas";
import { buildZodMessage as buildZodMsg } from "../../utils";
import { businessNumberSchema } from "./common-accounting.schemas";

export const createCompanySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, buildZodMsg(ValMsgs.REQUIRED)),
  legalName: z.string().min(1, buildZodMsg(ValMsgs.REQUIRED)),
  businessNumber: z.union([businessNumberSchema, z.literal("")]).optional(),
  payrollAccountNumber: z.string().optional(),
  address: z
    .union([z.string().min(1, buildZodMsg(ValMsgs.REQUIRED)), z.literal("")])
    .optional(),
  city: z
    .union([
      z.string().trim().min(1, buildZodMsg(ValMsgs.REQUIRED)),
      z.literal(""),
    ])
    .optional(),
  province: z
    .union([z.string().min(1, buildZodMsg(ValMsgs.REQUIRED)), z.literal("")])
    .optional(),
  postalCode: z
    .union([z.string().min(1, buildZodMsg(ValMsgs.REQUIRED)), z.literal("")])
    .optional(),
  phone: phoneNumberSchema,
  email: emailSchema,
  mediaToken: z.string().optional(),
});
export type CreateCompanyRequest = z.infer<typeof createCompanySchema>;

export const updateCompanySchema = createCompanySchema.partial();

export type UpdateCompanyRequest = z.infer<typeof updateCompanySchema>;
