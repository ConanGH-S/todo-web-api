import { NextFunction, Request, Response } from "express";
import { TCreateTodoDTO } from "../dtos/createTodoDTO.js";
import { createTodoSchema } from "../../validators/createTodoValidator.js";

export class CreateTodoMiddleware {
  public static async execute(req: Request, res: Response, next: NextFunction) {
    const data = req.body as unknown as TCreateTodoDTO;

    const schemaIsOk = createTodoSchema.safeParse(data);

    if (!schemaIsOk.success) return res.status(422).json({message: 'The object is not valid', error: schemaIsOk.error.errors});

    next();
  }
}