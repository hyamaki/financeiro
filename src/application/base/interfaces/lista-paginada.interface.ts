import { Base } from "../../../domain/base/entities/base.js";

export interface IListaPaginada {
  total_itens: number;
  itens: Array<Base>;
}
