import { IListaPaginada } from "../../base/interfaces/lista-paginada.interface.js";

export const LISTAR_MOVIMENTACOES_SERVICE_INTERFACE = Symbol(
  "LISTAR_MOVIMENTACOES_SERVICE_INTERFACE"
);
export interface IListarMovimentacoesService {
  executar(
    pagina: number,
    qtdItems: number,
    filtros?: any
  ): Promise<IListaPaginada>;
}
