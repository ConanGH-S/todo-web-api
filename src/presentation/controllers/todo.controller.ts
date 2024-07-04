import { Request, Response } from "express";
import { ITodoService } from "../../application/interfaces/ITodoService.js";
import autoBind from "auto-bind";

export class TodoController {
  private todoService: ITodoService;

  constructor(service: ITodoService) {
    this.todoService = service;
    autoBind(this);
  }

  public async getTodos(req: Request, res: Response) {
    try {
      const data = await this.todoService.get();
      return res.json(data);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      return res.status(500).json({ error: message });
    }
  }

  public async getTodo(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    try {
      const todo = await this.todoService.find(id);
      return res.json(todo);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      return res.status(500).json({ error: message });
    }
  }

  public async createTodo(req: Request, res: Response) {
    try {
      const newTodo = await this.todoService.create(req.body);
      return res.status(201).json(newTodo);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      return res.status(500).json({ error: message });
    }
  }

  public async updateTodo(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    try {
      const updatedTodo = await this.todoService.update(id, req.body);
      return res.json(updatedTodo);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      return res.status(500).json({ error: message });
    }
  }

  public async deleteTodo(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    try {
      const deletedTodo = await this.todoService.delete(id);
      return res.json(deletedTodo);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      return res.status(500).json({ error: message });
    }
  }
}