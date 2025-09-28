import { v4 as uuidv4 } from 'uuid';

export abstract class BaseEntity {
  id?: number;
  uuid?: string;
  data_criacao?: Date;
  data_atualizacao?: Date;
  data_exclusao?: Date;

  constructor(
    id?: number,
    uuid?: string,
    data_criacao?: Date,
    data_atualizacao?: Date,
    data_exclusao?: Date,
  ) {
    this.id = id;
    this.uuid = uuid || uuidv4();
    this.data_criacao = data_criacao;
    this.data_atualizacao = data_atualizacao;
    this.data_exclusao = data_exclusao;
  }
}
