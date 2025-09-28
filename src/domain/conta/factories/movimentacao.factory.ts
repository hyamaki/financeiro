import { Movimentacao } from "../entities/movimentacao";

export class MovimentacaoFactory {
  static create(
    nome: string,
    tipo: number,
    id?: number,
    uuid?: string,
    data_criacao?: Date,
    data_atualizacao?: Date,
    data_exclusao?: Date
  ): Movimentacao {
    const categoria = new Categoria(
      nome,
      tipo,
      id,
      uuid,
      data_criacao,
      data_atualizacao,
      data_exclusao
    );

    return categoria;
  }

  static createFromEntity(entity: CategoriaEntity): Categoria {
    return new Categoria(
      entity.nome,
      entity.tipo,
      entity.id,
      entity.uuid,
      entity.data_criacao,
      entity.data_atualizacao,
      entity.data_exclusao
    );
  }

  static convertToEntity(categoria: Categoria): CategoriaEntity {
    return {
      id: categoria.id,
      uuid: categoria.uuid,
      nome: categoria.nome,
      tipo: categoria.tipo,
    } as CategoriaEntity;
  }
}
