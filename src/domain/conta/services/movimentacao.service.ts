import { inject, injectable } from "tsyringe";
import { BaseService } from "../../base/services/base.service";
import { Movimentacao } from "../entities/movimentacao";
import {
  IMovimentacaoRepository,
  MOVIMENTACAO_REPOSITORY_INTERFACE,
} from "../repository/movimentacao-repository.interface";
import { IMovimentacaoService } from "../interfaces/movimentacao-service.interface";

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
