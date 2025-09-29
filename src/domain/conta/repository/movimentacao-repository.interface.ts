import { IBaseRepository } from "../../base/interfaces/base-repository.interface.js";
import { Movimentacao } from "../entities/movimentacao.js";

export const MOVIMENTACAO_REPOSITORY_INTERFACE = Symbol(
  "MOVIMENTACAO_REPOSITORY_INTERFACE"
);
export type IMovimentacaoRepository = IBaseRepository<Movimentacao>;
