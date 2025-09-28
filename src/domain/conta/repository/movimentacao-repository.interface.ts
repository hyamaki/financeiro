import { IBaseRepository } from "../../base/interfaces/base-repository.interface";
import { Movimentacao } from "../entities/movimentacao";

export const MOVIMENTACAO_REPOSITORY_INTERFACE = Symbol(
  "MOVIMENTACAO_REPOSITORY_INTERFACE"
);
export type IMovimentacaoRepository = IBaseRepository<Movimentacao>;
