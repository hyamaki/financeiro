import { IBaseService } from "../../base/interfaces/base-service.interface";
import { Movimentacao } from "../entities/movimentacao";

export const MOVIMENTACAO_SERVICE_INTERFACE = Symbol(
  "MOVIMENTACAO_SERVICE_INTERFACE"
);
export type IMovimentacaoService = IBaseService<Movimentacao>;
