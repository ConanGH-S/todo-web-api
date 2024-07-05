import { z } from "zod";
import { updateTodoSchema } from "../../validators/updateTodoValidator.js";

export type TUpdateTodoDTO = z.infer<typeof updateTodoSchema>;