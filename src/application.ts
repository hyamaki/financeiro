import express, { Express, Request, Response, RequestHandler } from "express";
import path from "path";
import { fileURLToPath } from "url";
// import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from "dotenv";

import datasource from "./infrastructure/database/datasource.js";
import { ContaModule } from "./domain/conta/conta.module.js";
import webRoutes from "./infrastructure/www/routes/web.route.js";
import { BaseModule } from "./domain/base/base.module.js";
import { utils } from "./infrastructure/www/utils/index.js";
// import { authMiddleware } from './http/merchant/middlewares/auth.middleware';

dotenv.config({ path: ".env", quiet: true });
datasource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    BaseModule.registerDependencies(datasource);
    ContaModule.registerDependencies(datasource);
  })
  .catch((err: any) => {
    console.error("Error during Data Source initialization:", err);
  });

const app: Express = express();

// app.use(cors({
//   origin: [
//     'http://localhost:3000',
//   ]
// }));
// app.use(authMiddleware as RequestHandler);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(dirname, "infrastructure/www/views"));
app.use(express.static(path.join(dirname, "..", "public")));
app.locals = utils;

app.use("/", webRoutes);

export default app;
