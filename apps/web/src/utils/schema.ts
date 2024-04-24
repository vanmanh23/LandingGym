import * as z from "zod";

export const contactUsSchema = z.object({
  firstName: z.string().trim().min(1, {message: "First name is required"}),
  lastName: z.string().trim().min(1, {message: "Last name is required"}),
  email: z.string().email({message: "Invalid email"}),
  phoneNumber: z.string().min(9, {message: "Invalid phone number"}).max(9, {message: "Invalid phone number"}).optional(),
})