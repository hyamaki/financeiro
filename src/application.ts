import express, { Express } from "express";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import openid, { requiresAuth } from "express-openid-connect";

import datasource from "./infrastructure/database/datasource";
import webRoutes from "./infrastructure/www/routes/web.route";
import { utils } from "./infrastructure/www/utils/index";
import { auth0_config } from "./configs/auth0";
import { loadDIContainer } from "./configs/di-container";

dotenv.config({ path: ".env", quiet: true });

if (process.env.NODE_ENV !== "test") {
  datasource
    .initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
      loadDIContainer(datasource);
    })
    .catch((err: any) => {
      console.error("Error during Data Source initialization:", err);
    });
}

const app: Express = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// auth0 middleware
app.use(openid.auth(auth0_config));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "infrastructure/www/views"));
app.use(express.static(path.join(__dirname, "..", "public")));
app.locals = utils;

app.use("/", requiresAuth(), webRoutes);

export default app;
