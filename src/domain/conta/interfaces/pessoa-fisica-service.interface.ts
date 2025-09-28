import { PessoaFisica } from '../../../domain/aggregates/pessoa-fisica';
import { IBaseService } from './base-service.interface';

export const PESSOA_FISICA_SERVICE_INTERFACE = Symbol(
  'PESSOA_FISICA_SERVICE_INTERFACE',
);
export interface IPessoaFisicaService extends IBaseService<PessoaFisica> {
  adicionar(novoPessoaFisicaRequestDTO: PessoaFisica): Promise<PessoaFisica>;
  atualizar(
    uuid: string,
    atualizarPessoaFisicaRequestDTO: PessoaFisica,
  ): Promise<PessoaFisica>;
}
