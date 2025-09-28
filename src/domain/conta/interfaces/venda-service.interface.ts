import { Venda } from '../../aggregates/venda';
import { IBaseService } from './base-service.interface';

export const VENDA_SERVICE_INTERFACE = Symbol(
  'VENDA_SERVICE_INTERFACE',
);
export interface IVendaService extends IBaseService<Venda> {
  // adicionar(novaServicoRequestDTO: Servico): Promise<Servico>;
  // atualizar(
  //   uuid: string,
  //   atualizarServicoRequestDTO: Servico,
  // ): Promise<Servico>;
  obterPorUuid(uuid: string): Promise<Venda>;
  obterListaPaginada(
    pagina: number,
    qtdItem: number,
    filter?: Record<string, any>,
    order?: Record<string, any>,
  ): Promise<{ total_itens: number; itens: Array<Venda> }>;
}
