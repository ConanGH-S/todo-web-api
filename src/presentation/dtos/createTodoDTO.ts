import { z } from "zod";
import { createTodoSchema } from "../../validators/createTodoValidator.js";

export type TCreateTodoDTO = z.infer<typeof createTodoSchema>;