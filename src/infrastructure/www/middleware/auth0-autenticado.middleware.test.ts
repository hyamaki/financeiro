import request from "supertest";
import { Request, Response, NextFunction } from "express";
import app from "../../../application";

jest.mock("express-openid-connect", () => {
  // Simula o middleware 'requiresAuth()'
  // Ele recebe (req, res, next) e deve injetar um usuário antes de chamar next().
  const requiresAuthMock =
    () => (req: Request, res: Response, next: NextFunction) => {
      // ⚠️ ATENÇÃO: INJETANDO O USUÁRIO MOCADO NO OBJETO 'req.oidc'
      // Este objeto e caminho dependem da biblioteca de autenticação que você usa.
      (req as any).oidc = {
        user: {
          sub: "auth0|mocked-user-id",
          name: "Mock User",
          email: "mock@teste.com",
        },
        isAuthenticated: () => true,
      };
      next(); // Permite que a requisição siga para o handler da rota
    };

  // Retorna os módulos que sua aplicação está importando e usando:
  return {
    requiresAuth: requiresAuthMock, // Usado para proteger a rota /profile
    auth: () => (req: Request, res: Response, next: NextFunction) => next(), // Usado em app.use(auth(...))
  };
});

describe("Bloqueio de Rota pelo Auth0", () => {
  it("deve retornar 200 OK se o middleware for mocado como autenticado", async () => {
    const response = await request(app).get("/profile").send();
    expect(response.statusCode).toBe(200);
  });
});
