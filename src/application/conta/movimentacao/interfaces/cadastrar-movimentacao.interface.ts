import { CadastrarMovimentacaoDTO } from "../dto/cadastrar-movimentacao.dto";

export const CADASTRAR_MOVIMENTACAO_SERVICE_INTERFACE = Symbol(
  "CADASTRAR_MOVIMENTACAO_SERVICE_INTERFACE"
);
export interface ICadastrarMovimentacaoService {
  executar(data: CadastrarMovimentacaoDTO): Promise<any>;
}
