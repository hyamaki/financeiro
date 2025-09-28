import { DataSource, Repository } from "typeorm";
import { container } from "tsyringe";
import { MOVIMENTACAO_SERVICE_INTERFACE } from "./interfaces/movimentacao-service.interface";
import { MovimentacaoService } from "./services/movimentacao.service";
import { MOVIMENTACAO_REPOSITORY_INTERFACE } from "./repository/movimentacao-repository.interface";
import {
  TYPEORM_MOVIMENTACAO_REPOSITORY_INTERFACE,
  TypeORMMovimentacaoRepository,
} from "../../infrastructure/database/repository/typeorm-movimentacao.repository";
import { MovimentacaoEntity } from "../../infrastructure/database/entities/movimentacao.entity";

export class ContaModule {
  static registerDependencies(dataSource: DataSource) {
    /**
     * APPLICATION SERVICES
     */
    //   container.register(ATUALIZAR_CATEGORIA_SERVICE_INTERFACE, {
    //     useClass: AtualizarCategoriaService,
    //   });

    /**
     * DOMAIN - SERVICE
     */
    container.register(MOVIMENTACAO_SERVICE_INTERFACE, {
      useValue: MovimentacaoService,
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
