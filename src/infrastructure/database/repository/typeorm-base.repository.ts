import { FindOptionsWhere, IsNull, Repository } from "typeorm";
import { Base } from "../../../domain/base/entities/base";
import { BaseEntity as TypeORMBaseEntity } from "../../../infrastructure/database/entities/base.entity";
import { IBaseRepository } from "../../../domain/base/interfaces/base-repository.interface";

export abstract class TypeOrmBaseRepository<
  TDomain extends Base,
  T extends TypeORMBaseEntity
> implements IBaseRepository<TDomain>
{
  protected constructor(
    protected ormRepository: Repository<TypeORMBaseEntity>
  ) {}

  protected abstract toDomain(entity: TypeORMBaseEntity): TDomain;
  protected abstract toPersistence(domain: TDomain): TypeORMBaseEntity;

  async _salvar(dominio: TDomain): Promise<TDomain> {
    const entidade = this.toPersistence(dominio);
    const entidadeTypeORM = this.ormRepository.create(entidade);
    const entidadeSalva = await this.ormRepository.save(entidadeTypeORM);
    return this.toDomain(entidadeSalva);
  }

  _excluir(entidade: TDomain): Promise<TDomain> {
    throw new Error("Method not implemented.");
  }
  _obterPorId(id: number): Promise<TDomain> {
    throw new Error("Method not implemented.");
  }

  async _obterPorUuid(
    uuid: string,
    relations?: Record<string, any>
  ): Promise<TDomain> {
    const entidadeBuscada = await this.ormRepository.findOneOrFail({
      // where: { uuid: uuid } as FindOptionsWhere<T>,
      ...relations,
    });
    return this.toDomain(entidadeBuscada);
  }

  async _obterListaPaginada(
    pagina: number = 1,
    qtdItem: number = 10,
    filter?: Record<string, any>,
    order?: Record<string, any>,
    relations?: Record<string, any>
  ): Promise<{ total_itens: number; itens: Array<TDomain> }> {
    const skip = (pagina - 1) * qtdItem;

    const [itens, total_itens] = await this.ormRepository.findAndCount({
      where: {
        // data_exclusao: IsNull(),
        ...filter,
      } as FindOptionsWhere<T>,
      skip,
      take: qtdItem,
      ...order,
      ...relations,
    });

    return {
      total_itens,
      itens: itens.map(this.toDomain.bind(this)),
    };
  }

  async _obterListaSelecao(
    order?: Record<string, any>
  ): Promise<Array<TDomain>> {
    const itens = await this.ormRepository.find({
      where: {
        // data_exclusao: IsNull(),
      } as FindOptionsWhere<T>,
      ...order,
    });

    return itens.map(this.toDomain.bind(this));
  }
}
