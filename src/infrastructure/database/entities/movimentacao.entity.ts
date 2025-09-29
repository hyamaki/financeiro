import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity.js";

@Entity({ name: "movimentacoes" })
export class MovimentacaoEntity extends BaseEntity {
  @Column({ type: "datetime" })
  data_operacao: Date;

  @Column({ type: "varchar", length: 255 })
  operacao: string | null;

  @Column({ type: "varchar", length: 255, nullable: true })
  nome: string;

  @Column({ type: "varchar", length: 255 })
  descricao: string | null;

  @Column({
    type: "decimal",
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  valor: number;

  @Column({ type: "varchar", length: 255 })
  categoria: string | null;
}
