import { DataSource } from "typeorm";
import { container } from "tsyringe";
import { LISTAR_MOVIMENTACOES_SERVICE_INTERFACE } from "./interfaces/listar-movimentacoes.interface";
import { ListarMovimentacoesService } from "./services/listar-movimentacoes.service";

export class ContaApplication {
  static registerDependencies(dataSource: DataSource) {
    container.register(LISTAR_MOVIMENTACOES_SERVICE_INTERFACE, {
      useClass: ListarMovimentacoesService,
    });
  }
}
