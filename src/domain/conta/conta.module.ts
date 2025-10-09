import { DataSource, Repository } from "typeorm";
import { container } from "tsyringe";
import { MOVIMENTACAO_SERVICE_INTERFACE } from "./interfaces/movimentacao-service.interface";
import { MovimentacaoService } from "./services/movimentacao.service";
import { MOVIMENTACAO_REPOSITORY_INTERFACE } from "./repositories/movimentacao-repository.interface";
import {
  TYPEORM_MOVIMENTACAO_REPOSITORY_INTERFACE,
  TypeORMMovimentacaoRepository,
} from "../../infrastructure/database/repository/typeorm-movimentacao.repository";
import { MovimentacaoEntity } from "../../infrastructure/database/entities/movimentacao.entity";
import { LISTAR_MOVIMENTACOES_SERVICE_INTERFACE } from "../../application/conta/interfaces/listar-movimentacoes.interface";
import { ListarMovimentacoesService } from "../../application/conta/services/listar-movimentacoes.service";

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
