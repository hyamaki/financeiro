import express from "express";
import { container } from "tsyringe";
import { IndexController } from "../../controllers/index.controller";

const controller = (): IndexController => {
  return container.resolve(IndexController);
};

const router = express.Router();

router.get("/", (req, res) => controller().index(req, res));
// router.post("/", (req, res) => controller().create(req, res));
// router.get("/list", (req, res) => controller().list(req, res));
// router.get("/:uuid", (req, res) => controller().detalhes(req, res));
// router.put("/:uuid", (req, res) => controller().update(req, res));
// router.get('/autocomplete', (req, res, next) => controller().autocomplete(req, res, next))

export default router;
