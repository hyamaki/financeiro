import "reflect-metadata";
import express, { Express, Request, Response, RequestHandler } from "express";
import path from "path";
// import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from "dotenv";

import datasource from "./infrastructure/database/datasource";
import { ContaModule } from "./domain/conta/conta.module";
import webRoutes from "./infrastructure/www/routes/web.route";
// import { authMiddleware } from './http/merchant/middlewares/auth.middleware';

dotenv.config({ path: ".env" });
datasource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "infrastructure/www/views"));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/", webRoutes);

export default app;
