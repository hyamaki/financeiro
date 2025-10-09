import { Base } from "../../../domain/base/entities/base";

export interface IListaPaginada {
  total_itens: number;
  itens: Array<Base>;
}
