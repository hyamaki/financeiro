import { CadastrarMovimentacaoService } from "./cadastrar-movimentacao.service.js";
import { IMovimentacaoService } from "../../../../domain/conta/interfaces/movimentacao-service.interface.js";

describe("CadastrarMovimentacaoService", () => {
  let service: CadastrarMovimentacaoService;
  let mockMovimentacaoService: jest.Mocked<IMovimentacaoService>;

  beforeEach(() => {
    mockMovimentacaoService = {
      _salvar: jest.fn(),
      _excluir: jest.fn(),
      _obterPorId: jest.fn(),
      _obterPorUuid: jest.fn(),
      _obterListaPaginada: jest.fn(),
      _obterListaSelecao: jest.fn(),
    };

    service = new CadastrarMovimentacaoService(mockMovimentacaoService);
  });

  // it('deve executar e retornar objeto vazio', async () => {
  //   const result = await service.executar();

  //   expect(result).toEqual({});
  // });
});
