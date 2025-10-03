import { DataSource, Repository } from "typeorm";
import { container } from "tsyringe";
import { MOVIMENTACAO_SERVICE_INTERFACE } from "./interfaces/movimentacao-service.interface.js";
import { MovimentacaoService } from "./services/movimentacao.service.js";
import { MOVIMENTACAO_REPOSITORY_INTERFACE } from "./repositories/movimentacao-repository.interface.js";
import {
  TYPEORM_MOVIMENTACAO_REPOSITORY_INTERFACE,
  TypeORMMovimentacaoRepository,
} from "../../infrastructure/database/repository/typeorm-movimentacao.repository.js";
import { MovimentacaoEntity } from "../../infrastructure/database/entities/movimentacao.entity.js";
import { LISTAR_MOVIMENTACOES_SERVICE_INTERFACE } from "../../application/conta/interfaces/listar-movimentacoes.interface.js";
import { ListarMovimentacoesService } from "../../application/conta/services/listar-movimentacoes.service.js";

export class ContaModule {
  static registerDependencies(dataSource: DataSource) {
    /**
     * APPLICATION SERVICES
     */
    container.register(LISTAR_MOVIMENTACOES_SERVICE_INTERFACE, {
      useClass: ListarMovimentacoesService,
    });

    /**
     * DOMAIN - SERVICE
     */
    container.register(MOVIMENTACAO_SERVICE_INTERFACE, {
      useClass: MovimentacaoService,
    });

    /**
     * DOMAIN - REPOSITORY
     */
    container.register(MOVIMENTACAO_REPOSITORY_INTERFACE, {
      useClass: TypeORMMovimentacaoRepository,
    });

    /**
     * INFRASTRUCTURE - TYPEORM
     */
    container.register<Repository<MovimentacaoEntity>>(
      TYPEORM_MOVIMENTACAO_REPOSITORY_INTERFACE,
      { useFactory: () => dataSource.getRepository(MovimentacaoEntity) }
    );
  }
}
