export class Todo {
  constructor(
    public id: number,
    public title: string,
    public description: string | null,
    public created_at: Date | null,
    public updated_at: Date | null,
    public deleted_at: Date | null,
  ) {}
}