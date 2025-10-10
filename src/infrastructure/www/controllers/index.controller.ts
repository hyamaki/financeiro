import { NextFunction, Request, Response } from "express";
import { injectable } from "tsyringe";

@injectable()
export class IndexController {
  constructor() {}

  async index(req: Request, res: Response, next: NextFunction) {
    try {
      res.render("index", {});
    } catch (error) {
      console.error("Error loading movimentacoes:", error);
      next(error);
    }
  }
}
