import { z } from "zod"

export const experienceSchema = z
  .object({
    position: z.string().min(1, "Position is required"),
    companyName: z.string().min(1, "Company Name is required"),
    location: z.string().optional(),
    startDate: z.string({ required_error: "Start Date is required" }),
    endDate: z
    .union([z.string(), z.literal("Present")]) // Allows either a date or "Present"
    .optional(),
    content: z.string({ required_error: "Details is required" })
    })
;
