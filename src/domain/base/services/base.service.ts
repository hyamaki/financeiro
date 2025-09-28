import { BaseEntity } from "../../domain/entities/base";
import { IBaseRepository } from "../interfaces/base-repository.interface";
import { IBaseService } from "./_interfaces/base-service.interface";

export abstract class BaseService<
  T extends BaseEntity,
  R extends IBaseRepository<T>
> implements IBaseService<T>
{
  protected repository: R;

  constructor(repository: R) {
    this.repository = repository;
  }

  async _adicionar(entidade: T): Promise<T> {
    return await this.repository._adicionar(entidade);
  }

  async _atualizar(uuid: string, entidade: T): Promise<T> {
    return await this.repository._atualizar(uuid, entidade);
  }

  _excluir(): Promise<T> {
    throw new Error("Method not implemented.");
  }
  _obterPorId(): Promise<T> {
    throw new Error("Method not implemented.");
  }

  async _obterPorUuid(
    uuid: string,
    relations?: Record<string, any>
  ): Promise<T> {
    return await this.repository._obterPorUuid(uuid, relations);
  }

  async _obterListaPaginada(
    pagina: number,
    qtdItem: number,
    filter?: Record<string, any>,
    order?: Record<string, any>,
    relations?: Record<string, any>
  ): Promise<{ total_itens: number; itens: Array<T> }> {
    return await this.repository._obterListaPaginada(
      pagina,
      qtdItem,
      filter,
      order,
      relations
    );
  }

  async _obterListaSelect(): Promise<Array<T>> {
    return await this.repository._obterListaSelect();
  }
}
