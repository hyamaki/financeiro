import { MovimentacaoEntity } from "../../../infrastructure/database/entities/movimentacao.entity.js";
import { Movimentacao } from "../entities/movimentacao.js";

export class MovimentacaoFactory {
  static create(
    nome: string,
    id?: number,
    uuid?: string,
    data_criacao?: Date,
    data_atualizacao?: Date,
    data_exclusao?: Date
  ): Movimentacao {
    const movimentacao = new Movimentacao(
      nome,
      id,
      uuid,
      data_criacao,
      data_atualizacao,
      data_exclusao
    );

    return movimentacao;
  }

  static createFromEntity(entity: MovimentacaoEntity): Movimentacao {
    return new Movimentacao(
      entity.nome
      // entity.id,
      // entity.uuid,
      // entity.data_criacao,
      // entity.data_atualizacao,
      // entity.data_exclusao
    );
  }

  static convertToEntity(categoria: Movimentacao): MovimentacaoEntity {
    return {
      // id: categoria.id,
      // uuid: categoria.uuid,
      // nome: categoria.nome,
    } as MovimentacaoEntity;
  }
}
