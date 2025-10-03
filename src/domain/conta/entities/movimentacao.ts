import { Base } from "../../base/entities/base.js";

export class Movimentacao extends Base {
  data_operacao: Date;
  operacao: string;
  nome: string;
  descricao: string;
  valor: number;
  categoria?: string;

  constructor(
    data_operacao: Date,
    operacao: string,
    nome: string,
    descricao: string,
    valor: number,
    categoria?: string,
    id?: number,
    uuid?: string,
    data_criacao?: Date,
    data_atualizacao?: Date,
    data_exclusao?: Date
  ) {
    super(id, uuid, data_criacao, data_atualizacao, data_exclusao);
    this.data_operacao = data_operacao;
    this.operacao = operacao;
    this.nome = nome;
    this.descricao = descricao;
    this.valor = valor;
    this.categoria = categoria;
  }

  // tipoValido(tipo: number): boolean {
  //   if (tipo !== 1 && tipo !== 2 && tipo !== 3) {
  //     return false;
  //   }
  //   return true;
  // }
}
