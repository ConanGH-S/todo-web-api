import { Router } from "express";
import { todoController } from "../../../dependencies.js";
import { CreateTodoMiddleware } from "../../../presentation/middleware/createTodo.middleware.js";
import { UpdateTodoMiddleware } from "../../../presentation/middleware/updateTodo.middleware.js";

const router: Router = Router();

router.get('/v1/todo', todoController.getTodos);

router.get('/v1/todo/:id', todoController.getTodo);

router.post('/v1/todo', CreateTodoMiddleware.execute, todoController.createTodo);

router.patch('/v1/todo/:id', UpdateTodoMiddleware.execute, todoController.updateTodo);

router.delete('/v1/todo/:id', todoController.deleteTodo);

export { router };