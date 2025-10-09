import express, { Express } from "express";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import openid from "express-openid-connect";

import datasource from "./infrastructure/database/datasource.js";
import webRoutes from "./infrastructure/www/routes/web.route.js";
import { utils } from "./infrastructure/www/utils/index.js";
import { BaseModule } from "./domain/base/base.module.js";
import { ContaModule } from "./domain/conta/conta.module.js";
import { MovimentacaoModule } from "./application/conta/movimentacao/movimentacao.application.js";

dotenv.config({ path: ".env", quiet: true });
datasource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    BaseModule.registerDependencies(datasource);
    MovimentacaoModule.registerDependencies(datasource);
    ContaModule.registerDependencies(datasource);
  })
  .catch((err: any) => {
    console.error("Error during Data Source initialization:", err);
  });

const app: Express = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "infrastructure/www/views"));
app.use(express.static(path.join(__dirname, "..", "public")));
app.locals = utils;

app.use("/", webRoutes);

/// POC auth0
const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: "http://localhost:3000",
  clientID: "2GV3mulmcrFxPwFmjnHG5mUCgm5PerUP",
  issuerBaseURL: "https://dev-wct4tlwnn1q3o7ut.us.auth0.com",
  secret: "65Y5xFtw0qczIUZtfL6XFtPt_XPpSmqDtxZFLufGndUA211JrOcapWINXRaCpeha",
};
app.use(openid.auth(config));
// req.oidc.isAuthenticated is provided from the auth router
app.get("/auth", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});
// The /profile route will show the user profile as JSON
app.get("/profile", openid.requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user, null, 2));
});
/// End POC auth0

export default app;
