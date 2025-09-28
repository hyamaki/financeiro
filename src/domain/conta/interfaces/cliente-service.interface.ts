import { Cliente } from '../../aggregates/cliente';
import { IBaseService } from './base-service.interface';

export const CLIENTE_SERVICE_INTERFACE = Symbol(
  'CLIENTE_SERVICE_INTERFACE',
);
export interface IClienteService extends IBaseService<Cliente> {
  adicionar(novoClienteRequestDTO: Cliente): Promise<Cliente>;
  atualizar(
    uuid: string,
    atualizarClienteRequestDTO: Cliente,
  ): Promise<Cliente>;
  obterPorUuid(uuid: string): Promise<Cliente>;
  obterListaPaginada(
    pagina: number,
    qtdItem: number,
    filter?: Record<string, any>,
    order?: Record<string, any>,
  ): Promise<{ total_itens: number; itens: Array<Cliente> }>;
}
