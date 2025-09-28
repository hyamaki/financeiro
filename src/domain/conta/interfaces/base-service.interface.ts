import { BaseEntity } from '../../../domain/entities/base';

export const BASE_SERVICE_INTERFACE = Symbol('BASE_SERVICE_INTERFACE');
export interface IBaseService<T extends BaseEntity> {
  _adicionar(entidade: Partial<T>): Promise<T>;
  _atualizar(uuid: string, entidade: Partial<T>): Promise<T>;
  _excluir(): Promise<T>;
  _obterPorId(): Promise<T>;
  _obterPorUuid(uuid: string, relations?: Record<string, any>): Promise<T>;
  _obterListaPaginada(
    pagina: number,
    qtdItem: number,
    filter?: Record<string, any>,
    order?: Record<string, any>,
    relations?: Record<string, any>,
  ): Promise<{ total_itens: number; itens: Array<T> }>;
  _obterListaSelect(): Promise<Array<T>>;
}
