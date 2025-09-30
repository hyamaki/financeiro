import { DataSource } from "typeorm";
import { container } from "tsyringe";
import { LISTAR_MOVIMENTACOES_SERVICE_INTERFACE } from "./interfaces/listar-movimentacoes.interface.js";
import { ListarMovimentacoesService } from "./services/listar-movimentacoes.service.js";

export class ContaApplication {
  static registerDependencies(dataSource: DataSource) {
    container.register(LISTAR_MOVIMENTACOES_SERVICE_INTERFACE, {
      useClass: ListarMovimentacoesService,
    });
  }
}
