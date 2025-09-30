import { MovimentacaoEntity } from "../../../infrastructure/database/entities/movimentacao.entity.js";
import { Movimentacao } from "../entities/movimentacao.js";

export class MovimentacaoFactory {
  static create(
    data_operacao: Date,
    operacao: string,
    nome: string,
    descricao: string,
    valor: number,
    id?: number,
    uuid?: string,
    data_criacao?: Date,
    data_atualizacao?: Date,
    data_exclusao?: Date
  ): Movimentacao {
    const movimentacao = new Movimentacao(
      data_operacao,
      operacao,
      nome,
      descricao,
      valor,
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
      entity.data_operacao,
      entity.operacao,
      entity.nome,
      entity.descricao,
      entity.valor,
      entity.id,
      entity.uuid,
      entity.data_criacao,
      entity.data_atualizacao,
      entity.data_exclusao
    );
  }

  static convertToEntity(movimentacao: Movimentacao): MovimentacaoEntity {
    return {
      // id: movimentacao.id,
      // uuid: movimentacao.uuid,
      // nome: movimentacao.nome,
    } as MovimentacaoEntity;
  }
}
