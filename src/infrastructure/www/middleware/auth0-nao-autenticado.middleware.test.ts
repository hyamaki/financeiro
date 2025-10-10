import request from "supertest";
import app from "../../../application";

describe("Bloqueio de Rota pelo Auth0", () => {
  it("deve retornar 302 (Redirecionamento) ou 401/403 se o usuário não estiver autenticado", async () => {
    // rota privada
    const response = await request(app).get("/profile").send();

    // Quando o Auth0 BLOQUEIA, ele geralmente faz um REDIRECIONAMENTO (302) para a página de login
    if (response.statusCode === 302) {
      expect(response.header.location).toContain("/");
    }
    // // Em algumas configurações (como APIs), ele pode retornar 401 (Não Autorizado)
    // // ou 403 (Proibido).
    // else if (response.statusCode === 401 || response.statusCode === 403) {
    //   expect(response.statusCode).toBe(401);
    //   console.log('✔ Rota bloqueada: Retornou 401 ou 403.');
    // }
    else {
      // Se não for nenhum dos códigos de erro esperados, o teste falha.
      fail(
        `A rota não foi bloqueada! Código inesperado: ${response.statusCode}`
      );
    }
  });
});
