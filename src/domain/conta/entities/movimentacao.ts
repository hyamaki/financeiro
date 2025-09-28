import { BaseEntity } from "./base";

export class Movimentacao extends BaseEntity {
  nome: string;
  tipo: number;

  constructor(
    nome: string,
    tipo: number,
    id?: number,
    uuid?: string,
    data_criacao?: Date,
    data_atualizacao?: Date,
    data_exclusao?: Date
  ) {
    super(id, uuid, data_criacao, data_atualizacao, data_exclusao);
    this.nome = nome;
    this.tipo = tipo;
  }

  tipoValido(tipo: number): boolean {
    if (tipo !== 1 && tipo !== 2 && tipo !== 3) {
      return false;
    }
    return true;
  }
}
