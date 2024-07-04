import * as z from "zod";

export const orgCreation = z.object({
  name: z.string().min(1, { message: "organization too short" }),
  imageUrl: z.string().min(1, {
    message: "Team image require.",
  }),
});

export const createOrgEvent = z.object({
  name: z.string(),
});

export const feedbackSchema = z.object({
  message: z.string().min(10, { message: "feedback message too short" }),
});


export const registerSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});