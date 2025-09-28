import { Produto } from '../../aggregates/produto';
import { IBaseService } from './base-service.interface';

export const PRODUTO_SERVICE_INTERFACE = Symbol(
  'PRODUTO_SERVICE_INTERFACE',
);
export interface IProdutoService extends IBaseService<Produto> {
  adicionar(novaProdutoRequestDTO: Produto): Promise<Produto>;
  atualizar(
    uuid: string,
    atualizarProdutoRequestDTO: Produto,
  ): Promise<Produto>;
  obterPorUuid(uuid: string): Promise<Produto>;
  obterListaPaginada(
    pagina: number,
    qtdItem: number,
    filter?: Record<string, any>,
    order?: Record<string, any>,
  ): Promise<{ total_itens: number; itens: Array<Produto> }>;
}
