import { todo } from "@prisma/client";

export interface ITodoService {
  get(): Promise<todo[]>
  find(id: number): Promise<todo | undefined>
  create(data: Pick<todo, 'title' | 'description'>): Promise<todo>
  update(id: number, data: Pick<todo, 'title' | 'description'>): Promise<todo>
  delete(id: number): Promise<todo>
}