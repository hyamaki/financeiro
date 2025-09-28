import { DataSource, DataSourceOptions } from "typeorm";
import dotenv from "dotenv";
import { join } from "path";

dotenv.config({ path: ".env" });

export const config = {
  type: process.env.DATABASE_TYPE,
  database: process.env.DATABASE_NAME,
  url: process.env.DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
  entities: [join(__dirname, "./entities/*.entity{.ts,.js}")],
  // seeds: [],
  // entities: ["src/entity/**/*.ts"],
  logging: process.env.DATABASE_LOG === "true" ? true : false,
  synchronize: process.env.DATABASE_SYNCHRONIZE === "true" ? true : false,
  dropSchema: process.env.DATABASE_DROP_SCHEMA === "true" ? true : false,
  migrationsTableName: "typeorm_migrations",
  migrationsRun: false,
  migrations: ["./src/infrastructure/database/migrations/**/*.ts"],
  subscribers: [],
};

const dataSource = new DataSource(config as DataSourceOptions);

export default dataSource;
