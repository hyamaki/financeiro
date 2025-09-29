import "reflect-metadata";
import express, { Express, Request, Response, RequestHandler } from "express";
import path from "path";
// import cors from 'cors';
import bodyParser from "body-parser";
// import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

import datasource from "./infrastructure/database/datasource";
import { ContaModule } from "./domain/conta/conta.module";
import webRoutes from "./infrastructure/www/routes/web.route";
// import { authMiddleware } from './http/merchant/middlewares/auth.middleware';
// import { runScheduledJobs } from './jobs';

dotenv.config({ path: ".env" });

// datasource
//   .initialize()
//   .then(() => {
//     console.log("Data Source has been initialized!");
//     ContaModule.registerDependencies(datasource);
//   })
//   .catch((err: any) => {
//     console.error("Error during Data Source initialization:", err);
//   });

const app: Express = express();

// app.use(cors({
//   origin: [
//     'http://localhost:3000',
//     'https://sandbox-sistema.absalao.app.br',
//     'https://absalao.app.br',
//   ]
// }));
// app.use(authMiddleware as RequestHandler);
// app.use('/', healthCheckRoutes);
// app.use('/admin', adminRoutes);
// app.use('/merchant', merchantRoutes);
// app.use('/wb', webRoutes);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Set the view engine to EJS
app.set("view engine", "ejs");
// Set the directory for view files
app.set("views", path.join(__dirname, "infrastructure/www/views"));
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/", webRoutes);

// app.post("/", async (req: Request, res: Response) => {
//   // Data to be passed to the EJS template
//   const ai = new GoogleGenAI({
//     apiKey: "AIzaSyD4Eqd7e_LSOEZ_ArUR3ccWgELWfzPq_Co",
//   });

//   const message = req.body.transacao;
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents:
//       "Extraia as seguintes informações da mensagem e formate a saída como um objeto JSON." +
//       'Mensagem: "' +
//       message +
//       '"' +
//       "Informações a extrair:" +
//       "- Data: A data e hora da transação. Se não for especificado, utilize a data e hora atual." +
//       "- Tipo: Classifique a transação como despesa ou receita." +
//       "- Titulo: Um título para a transação. Se não for especificado, use 'Pagamento' ou 'Recebimento'." +
//       "- Descricao: O motivo do pagamento ou recebimento, por exemplo: 'Compra de {item}', 'Recebimento de {pessoa}'. Se não for especificado, use 'Novo pagamento' ou 'Novo recebimento'." +
//       "- Valor: O valor numérico." +
//       "- Categoria: Classifique o item." +
//       "O JSON deve ter a seguinte estrutura:" +
//       "{" +
//       "  Data: string," +
//       "  Tipo: string," +
//       "  Titulo: string," +
//       "  Descricao: string," +
//       "  Valor: float," +
//       "  Categoria: string," +
//       "}",
//   });

//   console.log(response.text);

//   await datasource
//     .initialize()
//     .then(() => {
//       console.log("Data Source has been initialized!");
//     })
//     .catch((err: any) => {
//       console.error("Error during Data Source initialization:", err);
//     });

//   await datasource
//     .createQueryBuilder()
//     .insert()
//     .into(MovimentacaoEntity)
//     .values([{ uuid: "Timber" }, { uuid: "Unique" }])
//     .execute();

//   res.redirect("/");
// });

// app.get("/about", async (req: Request, res: Response) => {
//   // Configuração do cliente Turso
//   const db = createClient({
//     url: process.env.DATABASE_URL!,
//     authToken: process.env.TURSO_AUTH_TOKEN,
//   });

//   try {
//     // const { titulo, completa } = req.body;
//     // if (!titulo || typeof completa !== "boolean") {
//     //   return res
//     //     .status(400)
//     //     .send("Título e status de conclusão são obrigatórios.");
//     // }
//     const name = "Adicionando mais uma mensagem";

//     await db.execute({
//       sql: "INSERT INTO teste(name) VALUES(?)",
//       args: [name],
//     });
//     res.redirect("/");
//   } catch (err) {
//     console.error("Erro ao criar tarefa:", err);
//     res.redirect("/");
//   }
// });

export default app;
