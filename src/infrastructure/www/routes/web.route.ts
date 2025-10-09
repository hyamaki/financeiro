import express from "express";

import authRoute from "./web/auth.route";
import indexRoute from "./web/index.route";

const router = express.Router();

router.use("/", indexRoute);

export default router;
