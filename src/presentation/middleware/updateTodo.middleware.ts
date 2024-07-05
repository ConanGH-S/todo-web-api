import { NextFunction, Request, Response } from "express";
import { updateTodoSchema } from "../../validators/updateTodoValidator.js";

export class UpdateTodoMiddleware {
  public static execute(req: Request, res: Response, next: NextFunction) {
    const params = req.params;
    const id = Number(params.id);
    const body = req.body as unknown as UpdateTodoMiddleware;

    const data = {id, ...body};

    const schemaIsOk = updateTodoSchema.safeParse(data);

    if (!schemaIsOk.success) return res.status(422).json({message: 'The object is not valid', error: schemaIsOk.error.errors});

    next();
  }
}