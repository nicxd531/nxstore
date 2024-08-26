import { z } from "zod";

export const registrationSchema= z.object({
    email: z.string().email({message: "email has to be atleast 3 characters  and in email format"}),
    password: z.string().min(8,{message: "password has to be atleast 8 characters"})
})
export type RegistrationSchemaType = z.infer<typeof registrationSchema>;