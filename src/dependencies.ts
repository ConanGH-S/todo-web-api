import { PrismaClient } from "@prisma/client";
import { TodoController } from "./presentation/controllers/todo.controller.js";
import { TodoService } from "./application/services/todo.service.js";

const prisma = new PrismaClient();
export const todoService = new TodoService(prisma);
export const todoController = new TodoController(todoService);