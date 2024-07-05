import { todo } from "@prisma/client";
import { Todo } from "../../domain/entities/todo.js";

export interface ITodoService {
  get(): Promise<Todo[]>
  find(id: number): Promise<Todo | undefined>
  create(data: Pick<todo, 'title' | 'description'>): Promise<Todo>
  update(id: number, data: Pick<todo, 'title' | 'description'>): Promise<Todo>
  delete(id: number): Promise<Todo>
}