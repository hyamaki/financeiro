import { VendaServico } from '../../aggregates/venda-servico';
import { IBaseService } from './base-service.interface';

export const VENDA_SERVICO_SERVICE_INTERFACE = Symbol(
  'VENDA_SERVICO_SERVICE_INTERFACE',
);
export interface IVendaServicoService extends IBaseService<VendaServico> {
}
