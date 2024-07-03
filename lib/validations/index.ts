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
