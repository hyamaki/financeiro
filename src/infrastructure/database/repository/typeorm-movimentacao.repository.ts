import { inject, injectable } from "tsyringe";
import { Repository } from "typeorm";
import { TypeOrmBaseRepository } from "./typeorm-base.repository";
import { IMovimentacaoRepository } from "../../../domain/conta/repository/movimentacao-repository.interface";
import { Movimentacao } from "../../../domain/conta/entities/movimentacao";
import { MovimentacaoEntity } from "../entities/movimentacao.entity";
import { MovimentacaoFactory } from "../../../domain/conta/factories/movimentacao.factory";

export const TYPEORM_MOVIMENTACAO_REPOSITORY_INTERFACE = Symbol(
  "TYPEORM_MOVIMENTACAO_REPOSITORY_INTERFACE"
);

@injectable()
export class TypeORMMovimentacaoRepository
  extends TypeOrmBaseRepository<Movimentacao, MovimentacaoEntity>
  implements IMovimentacaoRepository
{
  constructor(
    @inject(TYPEORM_MOVIMENTACAO_REPOSITORY_INTERFACE)
    protected ormRepository: Repository<MovimentacaoEntity>
  ) {
    super(ormRepository);
  }

  protected toDomain(entity: MovimentacaoEntity): Movimentacao {
    return MovimentacaoFactory.createFromEntity(entity);
  }

  protected toPersistence(domain: Movimentacao): MovimentacaoEntity {
    return MovimentacaoFactory.convertToEntity(domain);
  }
}
