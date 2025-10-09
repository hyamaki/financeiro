import express from "express";
import { container } from "tsyringe";
import { AuthController } from "../../controllers/auth.controller.js";

const controller = (): AuthController => {
  return container.resolve(AuthController);
};

const router = express.Router();

router.get("/", (req, res, next) => controller().signin_form(req, res, next));
router.get("/callback", (req, res, next) =>
  controller().callback(req, res, next)
);
router.post("/", (req, res, next) => controller().signin(req, res, next));
// router.get("/list", (req, res) => controller().list(req, res));
// router.get("/:uuid", (req, res) => controller().detalhes(req, res));
// router.put("/:uuid", (req, res) => controller().update(req, res));
// router.get('/autocomplete', (req, res, next) => controller().autocomplete(req, res, next))

export default router;
