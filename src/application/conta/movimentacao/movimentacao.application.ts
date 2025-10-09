import { DataSource } from "typeorm";
import { container } from "tsyringe";
import { CADASTRAR_MOVIMENTACAO_SERVICE_INTERFACE } from "./interfaces/cadastrar-movimentacao.interface";
import { CadastrarMovimentacaoService } from "./services/cadastrar-movimentacao.service";

export class MovimentacaoModule {
  static registerDependencies(dataSource: DataSource) {
    container.register(CADASTRAR_MOVIMENTACAO_SERVICE_INTERFACE, {
      useClass: CadastrarMovimentacaoService,
    });
  }
}
