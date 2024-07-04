import { Router } from "express";
import { todoController } from "../../../dependencies.js";

const router: Router = Router();

router.get('/v1/todo', todoController.getTodos);

router.get('/v1/todo/:id', todoController.getTodo);

router.post('/v1/todo', todoController.createTodo);

router.patch('/v1/todo/:id', todoController.updateTodo);

router.delete('/v1/todo/:id', todoController.deleteTodo);

export { router };