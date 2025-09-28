import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255 })
  uuid!: string;

  @Column({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  data_criacao: Date;

  @Column({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  data_atualizacao: Date;

  @Column({ type: "timestamptz", nullable: true })
  data_exclusao?: Date;

  @BeforeInsert()
  setUuid() {
    this.uuid = uuid();
  }
}
