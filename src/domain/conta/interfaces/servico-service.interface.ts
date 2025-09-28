import { Servico } from '../../aggregates/servico';
import { IBaseService } from './base-service.interface';

export const SERVICO_SERVICE_INTERFACE = Symbol(
  'SERVICO_SERVICE_INTERFACE',
);
export interface IServicoService extends IBaseService<Servico> {
  adicionar(novaServicoRequestDTO: Servico): Promise<Servico>;
  atualizar(
    uuid: string,
    atualizarServicoRequestDTO: Servico,
  ): Promise<Servico>;
  obterPorUuid(uuid: string): Promise<Servico>;
  obterListaPaginada(
    pagina: number,
    qtdItem: number,
    filter?: Record<string, any>,
    order?: Record<string, any>,
  ): Promise<{ total_itens: number; itens: Array<Servico> }>;
}
