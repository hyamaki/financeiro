import { BaseEntity } from '../../domain/entities/base';

export interface IBaseRepository<T extends BaseEntity> {
  _adicionar(entidade: T): Promise<T>;
  _atualizar(uuid: string, entidade: T): Promise<T>;
  _excluir(entidade: T): Promise<T>;
  _obterPorId(id: number): Promise<T>;
  _obterPorUuid(uuid: string, relations?: Record<string, any>): Promise<T>;
  _obterListaPaginada(
    pagina: number,
    qtdItem: number,
  ): Promise<{ total_itens: number; itens: Array<T> }>;
  _obterListaPaginada(
    pagina: number,
    qtdItem: number,
    filter?: Record<string, any>,
    order?: Record<string, any>,
    relations?: Record<string, any>,
  ): Promise<{ total_itens: number; itens: Array<T> }>;
  _obterListaSelect(order?: Record<string, any>): Promise<Array<T>>;
  // remove(entity: T): Promise<T>;
}
