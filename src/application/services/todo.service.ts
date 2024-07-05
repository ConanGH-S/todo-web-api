import { PrismaClient, todo } from "@prisma/client";
import { ITodoService } from "../interfaces/ITodoService.js";
import { Todo } from "../../domain/entities/todo.js";

export class TodoService implements ITodoService {

  private readonly _repository;

  public constructor(repository: PrismaClient) {
    this._repository = repository;
  }
  
  public async get(): Promise<Todo[]> {
    const data = await this._repository.todo.findMany();
    return data.map(todo => new Todo(todo.id, todo.title, todo.description, todo.created_at, todo.updated_at, todo.deleted_at));
  }

  public async find(id: number): Promise<todo> {
    const data = await this._repository.todo.findUnique({ where: { id } });
    if (!data) throw new Error("Todo not found");
    return data;
  }
  public async create(data: Pick<todo, "title" | "description">): Promise<todo> {
    const todo = await this._repository.todo.create({ data });
    return todo;
  }

  public async update(id: number, data: { id: number; title: string; description: string | null; created_at: Date; updated_at: Date; deleted_at: Date | null; }): Promise<todo> {
    const todo = await this._repository.todo.update({ where: { id }, data });
    return todo;
  }

  public async delete(id: number): Promise<todo> {
    const todo = await this._repository.todo.update({ where: { id }, data: { deleted_at: new Date() } });
    return todo;
  }
}