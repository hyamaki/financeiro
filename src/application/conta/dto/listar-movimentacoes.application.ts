import { Base } from "../../../domain/base/entities/base";

export class Movimentacao extends Base {
  data_operacao: Date;
  operacao: string;
  nome: string;
  descricao: string;
  valor: number;

  constructor(
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
  ) {
    super(id, uuid, data_criacao, data_atualizacao, data_exclusao);
    this.data_operacao = data_operacao;
    this.operacao = operacao;
    this.nome = nome;
    this.descricao = descricao;
    this.valor = valor;
  }

  // tipoValido(tipo: number): boolean {
  //   if (tipo !== 1 && tipo !== 2 && tipo !== 3) {
  //     return false;
  //   }
  //   return true;
  // }
}
