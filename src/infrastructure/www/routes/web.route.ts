import express from "express";

import indexRoute from "./web/index.route.js";

const router = express.Router();

router.use("/", indexRoute);

export default router;
