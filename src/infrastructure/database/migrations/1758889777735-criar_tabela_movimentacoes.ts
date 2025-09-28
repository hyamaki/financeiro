import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CriarTabelaMovimentacoes1758889777735
  implements MigrationInterface
{
  tablename = "movimentacoes";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tablename,
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isNullable: false,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "uuid",
            type: "varchar",
            generationStrategy: "uuid",
            isNullable: false,
          },
          {
            name: "data_operacao",
            type: "timestamp with time zone",
            isNullable: false,
          },
          {
            name: "operacao",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "nome",
            type: "varchar",
            length: "255",
            isNullable: true,
          },
          {
            name: "descricao",
            type: "varchar",
            length: "255",
            isNullable: true,
          },
          {
            name: "valor",
            type: "decimal",
            isNullable: false,
          },
          {
            name: "categoria",
            type: "string",
            isNullable: true,
          },
          {
            name: "data_criacao",
            type: "timestamp with time zone",
            isNullable: false,
            default: "now()",
          },
          {
            name: "data_atualizacao",
            type: "timestamp with time zone",
            isNullable: false,
            default: "now()",
          },
          {
            name: "data_exclusao",
            type: "timestamp with time zone",
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.createIndex(
      this.tablename,
      new TableIndex({
        columnNames: ["uuid"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tablename);
  }
}
