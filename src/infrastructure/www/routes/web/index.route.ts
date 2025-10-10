import express from "express";
import { container } from "tsyringe";
import { IndexController } from "../../controllers/index.controller";

const controller = (): IndexController => {
  return container.resolve(IndexController);
};

const router = express.Router();

// app.get('/', (req, res) => {
//   // req.oidc.isAuthenticated() verifica se há uma sessão ativa
//   res.send(req.oidc.isAuthenticated() ? 'Logado' : 'Deslogado. Por favor, clique no botão de login.');
// });
router.get("/", (req, res, next) => controller().index(req, res, next));
router.get("/login", (req, res) =>
  res.send(
    req.oidc.isAuthenticated()
      ? "Logado"
      : "Deslogado. Por favor, clique no botão de login."
  )
);
// // req.oidc.isAuthenticated is provided from the auth router
// app.get("/auth", (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
// });
// // The /profile route will show the user profile as JSON
router.get("/profile", (req, res) => {
  res.send(JSON.stringify(req.oidc.user, null, 2));
});
// // router.get("/list", (req, res) => controller().list(req, res));
// // router.get("/:uuid", (req, res) => controller().detalhes(req, res));
// // router.put("/:uuid", (req, res) => controller().update(req, res));
// // router.get('/autocomplete', (req, res, next) => controller().autocomplete(req, res, next))

export default router;
