import { BaseEntity } from "../entities/base.js";

export interface IBaseRepository<T extends BaseEntity> {
  _salvar(entidade: T): Promise<T>;
  _excluir(entidade: T): Promise<T>;
  _obterPorId(id: number): Promise<T>;
  _obterPorUuid(uuid: string, relations?: Record<string, any>): Promise<T>;
  _obterListaPaginada(
    pagina: number,
    qtdItem: number,
    filter?: Record<string, any>,
    order?: Record<string, any>,
    relations?: Record<string, any>
  ): Promise<{ total_itens: number; itens: Array<T> }>;
  _obterListaSelecao(order?: Record<string, any>): Promise<Array<T>>;
}
