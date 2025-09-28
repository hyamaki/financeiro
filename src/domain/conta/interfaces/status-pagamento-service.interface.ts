import { CodigoStatusPagamentoEnum } from '../../../shared/enums/status-pagamento.enum';
import { StatusPagamento } from '../../aggregates/status-pagamento';
import { IBaseService } from './base-service.interface';

export const STATUS_PAGAMENTO_SERVICE_INTERFACE = Symbol(
  'STATUS_PAGAMENTO_SERVICE_INTERFACE',
);
export interface IStatusPagamentoService extends IBaseService<StatusPagamento> {
  obterPorCodigo(codigo: CodigoStatusPagamentoEnum): Promise<StatusPagamento>;
}
