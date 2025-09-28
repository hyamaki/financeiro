import { VendaProduto } from '../../aggregates/venda-produto';
import { IBaseService } from './base-service.interface';

export const VENDA_PRODUTO_SERVICE_INTERFACE = Symbol(
  'VENDA_PRODUTO_SERVICE_INTERFACE',
);
export interface IVendaProdutoService extends IBaseService<VendaProduto> {
}
