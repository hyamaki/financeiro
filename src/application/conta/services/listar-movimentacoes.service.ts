import { inject, injectable } from "tsyringe";
import { IListarMovimentacoesService } from "../interfaces/listar-movimentacoes.interface.js";
import {
  IMovimentacaoService,
  MOVIMENTACAO_SERVICE_INTERFACE,
} from "../../../domain/conta/interfaces/movimentacao-service.interface.js";
import { IListaPaginada } from "../../base/interfaces/lista-paginada.interface.js";

@injectable()
export class ListarMovimentacoesService implements IListarMovimentacoesService {
  private iMovimentacaoService: IMovimentacaoService;

  constructor(
    @inject(MOVIMENTACAO_SERVICE_INTERFACE)
    iMovimentacaoService: IMovimentacaoService
  ) {
    this.iMovimentacaoService = iMovimentacaoService;
  }

  async executar(
    pagina: number,
    qtdItems: number,
    filtros?: any
  ): Promise<IListaPaginada> {
    const movimentacoes = await this.iMovimentacaoService._obterListaPaginada(
      pagina,
      qtdItems,
      filtros,
      {
        order: { id: "DESC" },
      }
    );
    return movimentacoes;
  }
}
