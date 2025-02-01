import { z } from "zod";

export const formSchema = z.object({
  teamName: z.string().min(1, "Team name is required").max(50),
  teamDescription: z.string().max(200).optional(),
  teamSize: z.string().min(1, "Please select team size"),
  members: z.array(
    z.object({
      fullName: z.string().min(1, "Full name is required"),
      email: z.string().email("Invalid email address"),
      phone: z.string().min(10, "Invalid phone number"),
      socialLink: z.string().url().optional(),
      role: z.string().min(1, "Please select a role"),
    })
  ),
  theme: z.string().min(1, "Please select a theme"),
  participantType: z.string().min(1, "Please select participant type"),
  source: z.string().min(1, "Please select how you heard about us"),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

export type FormValues = z.infer<typeof formSchema>;