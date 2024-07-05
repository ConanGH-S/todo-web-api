import { z } from "zod";

export const updateTodoSchema = z.object({
  id: z.number().int().positive().min(1),
  title: z.string().min(1),
  description: z.string().nullable()
});