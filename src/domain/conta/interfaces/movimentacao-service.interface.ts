import { IBaseService } from "../../base/interfaces/base-service.interface.js";
import { Movimentacao } from "../entities/movimentacao.js";

export const MOVIMENTACAO_SERVICE_INTERFACE = Symbol(
  "MOVIMENTACAO_SERVICE_INTERFACE"
);
export type IMovimentacaoService = IBaseService<Movimentacao>;
