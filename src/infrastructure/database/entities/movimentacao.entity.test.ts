import { DataSource } from "typeorm";
import { MovimentacaoEntity } from "./movimentacao.entity";

// 1. Definição do DataSource para o Teste
const AppDataSource = new DataSource({
  type: "sqlite",
  database: ":memory:",
  dropSchema: true,
  entities: [MovimentacaoEntity],
  synchronize: true,
  logging: false,
  migrationsTableName: "typeorm_migrations",
  migrationsRun: false,
  subscribers: [],
});

beforeAll(async () => {
  await AppDataSource.initialize();
});

// Hook para fechar a conexão após todos os testes
afterAll(async () => {
  // O método `destroy` substitui o `close`
  await AppDataSource.destroy();
});

// Hook para garantir um banco de dados limpo para cada teste
beforeEach(async () => {
  // Limpa o banco de dados (alternativa ao synchronize(true))
  if (AppDataSource.isInitialized) {
    await AppDataSource.synchronize(true);
  }
});

describe("Movimentacao Entity Tests", () => {
  it("should save a user to the in-memory database", async () => {
    const movimentacaoRepository =
      AppDataSource.getRepository(MovimentacaoEntity);
    const novaMovimentacao = new MovimentacaoEntity();
    novaMovimentacao.data_operacao = new Date();
    novaMovimentacao.operacao = "CREDITO";
    novaMovimentacao.nome = "Pagamento recebido de Empresa";
    novaMovimentacao.descricao = "Recebimento de salário";
    novaMovimentacao.valor = 1549.35;
    novaMovimentacao.categoria = "Salário";
    const movimentacaoSalva = await movimentacaoRepository.save(
      novaMovimentacao
    );
    expect(movimentacaoSalva).toBeDefined();
    expect(movimentacaoSalva.id).toBe(1);
    expect(movimentacaoSalva.operacao).toBe("CREDITO");
  });
  //   it('should find a user by ID', async () => {
  //     const userRepository = getRepository(User);
  //     // Setup: Cria e salva um usuário
  //     const userToSave = userRepository.create({
  //       firstName: 'Bob',
  //       lastName: 'TheBuilder',
  //       isActive: true,
  //     });
  //     const savedUser = await userRepository.save(userToSave);
  //     // Ação: Busca o usuário pelo ID
  //     const foundUser = await userRepository.findOne({ where: { id: savedUser.id } });
  //     // Verificação (Assertion)
  //     expect(foundUser).toBeDefined();
  //     expect(foundUser!.lastName).toBe('TheBuilder');
  //     // Para Typescript: O ! garante que foundUser não é null/undefined para o compilador
  //   });
  //
});
