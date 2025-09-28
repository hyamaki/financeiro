import { inject, injectable } from "tsyringe";
import { BaseService } from "./base.service";
import { Categoria } from "../entities/movimentacao";
import { ICategoriaService } from "./_interfaces/categoria-service.interface";
import {
  ICategoriaRepository,
  CATEGORIA_REPOSITORY_INTERFACE,
} from "../repository/categoria-repository.interface";

@injectable()
export class CategoriaService
  extends BaseService<Categoria, ICategoriaRepository>
  implements ICategoriaService
{
  constructor(
    @inject(CATEGORIA_REPOSITORY_INTERFACE)
    private iCategoriaRepository: ICategoriaRepository
  ) {
    super(iCategoriaRepository);
  }

  async adicionar(pessoaFisica: Categoria): Promise<Categoria> {
    return super._adicionar(pessoaFisica);
  }

  atualizar(
    uuid: string,
    atualizarCategoriaRequestDTO: Categoria
  ): Promise<Categoria> {
    return super._atualizar(uuid, atualizarCategoriaRequestDTO);
  }

  async obterPorUuid(uuid: string): Promise<Categoria> {
    return await super._obterPorUuid(uuid, {
      // relations: ['pessoa_fisica'],
    });
  }

  async obterListaPaginada(
    pagina: number,
    qtdItem: number,
    filter?: Record<string, any>,
    order?: Record<string, any>
  ): Promise<{ total_itens: number; itens: Array<Categoria> }> {
    return await super._obterListaPaginada(
      pagina,
      qtdItem,
      filter,
      { order: { nome: "ASC" } },
      {
        // relations: ['pessoa_fisica'],
      }
    );
  }

  async obterListaSelect(): Promise<Array<Categoria>> {
    return await this.repository._obterListaSelect();
  }
}
