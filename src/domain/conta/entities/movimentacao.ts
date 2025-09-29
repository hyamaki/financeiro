import { BaseEntity } from "../../base/entities/base.js";

export class Movimentacao extends BaseEntity {
  nome?: string;

  constructor(
    nome: string,
    id?: number,
    uuid?: string,
    data_criacao?: Date,
    data_atualizacao?: Date,
    data_exclusao?: Date
  ) {
    super(id, uuid, data_criacao, data_atualizacao, data_exclusao);
    this.nome = nome;
  }

  // tipoValido(tipo: number): boolean {
  //   if (tipo !== 1 && tipo !== 2 && tipo !== 3) {
  //     return false;
  //   }
  //   return true;
  // }
}
