import { Categoria } from "../../entities/movimentacao";
import { IBaseService } from "./base-service.interface";

export const CATEGORIA_SERVICE_INTERFACE = Symbol(
  "CATEGORIA_SERVICE_INTERFACE"
);
export interface ICategoriaService extends IBaseService<Categoria> {
  adicionar(novaCategoriaRequestDTO: Categoria): Promise<Categoria>;
  atualizar(
    uuid: string,
    atualizarCategoriaRequestDTO: Categoria
  ): Promise<Categoria>;
  obterPorUuid(uuid: string): Promise<Categoria>;
  obterListaPaginada(
    pagina: number,
    qtdItem: number,
    filter?: Record<string, any>,
    order?: Record<string, any>
  ): Promise<{ total_itens: number; itens: Array<Categoria> }>;
  obterListaSelect(): Promise<Array<Categoria>>;
}
