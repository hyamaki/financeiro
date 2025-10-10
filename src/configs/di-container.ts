import { DataSource } from "typeorm";

import { BaseModule } from "./../domain/base/base.module";
import { ContaModule } from "./../domain/conta/conta.module";
import { MovimentacaoModule } from "./../application/conta/movimentacao/movimentacao.application";

export const loadDIContainer = (datasource: DataSource) => {
  BaseModule.registerDependencies(datasource);
  MovimentacaoModule.registerDependencies(datasource);
  ContaModule.registerDependencies(datasource);
};
