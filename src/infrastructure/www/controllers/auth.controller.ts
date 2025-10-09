import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";

@injectable()
export class AuthController {
  constructor() {}

  async signin_form(req: Request, res: Response, next: NextFunction) {
    try {
      res.render("auth/login", {});
    } catch (error) {
      console.error("Error loading signin page", error);
      next(error);
    }
  }

  async callback(req: Request, res: Response, next: NextFunction) {
    try {
      res.render("auth/callback", {});
    } catch (error) {
      console.error("Error loading signin page", error);
      next(error);
    }
  }

  async signin(req: Request, res: Response, next: NextFunction) {
    try {
      res.render("auth/login", {});
    } catch (error) {
      console.error("Error loading signin page", error);
      next(error);
    }
  }
}
