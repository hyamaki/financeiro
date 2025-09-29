import { inject, injectable } from "tsyringe";
import { BaseService } from "../../base/services/base.service.js";
import { Movimentacao } from "../entities/movimentacao.js";
import {
  IMovimentacaoRepository,
  MOVIMENTACAO_REPOSITORY_INTERFACE,
} from "../repository/movimentacao-repository.interface.js";
import { IMovimentacaoService } from "../interfaces/movimentacao-service.interface.js";

@injectable()
export class MovimentacaoService
  extends BaseService<Movimentacao, IMovimentacaoRepository>
  implements IMovimentacaoService
{
  constructor(
    @inject(MOVIMENTACAO_REPOSITORY_INTERFACE)
    private iMovimentacaoRepository: IMovimentacaoRepository
  ) {
    super(iMovimentacaoRepository);
  }
}
