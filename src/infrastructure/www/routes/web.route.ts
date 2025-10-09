import express from "express";

import authRoute from "./web/auth.route.js";
import indexRoute from "./web/index.route.js";

const router = express.Router();

router.use("/", indexRoute);

export default router;
