import { z } from "zod";

export const registrationSchema= z.object({
    surName: z.string().min(3,{message: "surname has to be atleast 3 characters"}),
    firstName: z.string().min(3,{message: "first name has to be atleast 3 characters"}),
    userName: z.string().min(3,{message: "user name has to be atleast 3 characters"}),
    email: z.string().email({message: "email has to be atleast 3 characters  and in email format"}),
    number:  z.string().min(10, { message: "Phone number must be at least 10 digits long." })  // Minimum length for phone number
    .max(15, { message: "Phone number must be at most 15 digits long." })   // Maximum length for phone number
    .regex(/^[0-9]+$/, { message: "Phone number can only contain digits." }),// Ensure phone number contains only digits
    Address1: z.string().min(10,{message: "address 1 has to be atleast 10 characters"}),
    Address2: z.string().min(10,{message: "address 2 has to be atleast 10 characters"}),
    password: z.string().min(8,{message: "password has to be atleast 8 characters"}),
    confirmPassword: z.string().min(8,{message: "confirm password has to be atleast 8 characters"}),

}).superRefine(({password,confirmPassword}, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "passwords do not match",
        path:["confirmPassword"]
      });
    }
  });


export type RegistrationSchemaType = z.infer<typeof registrationSchema>;