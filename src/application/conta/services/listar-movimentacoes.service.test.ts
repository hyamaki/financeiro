import { container } from "tsyringe";
import { ListarMovimentacoesService } from "./listar-movimentacoes.service";
import {
  IMovimentacaoService,
  MOVIMENTACAO_SERVICE_INTERFACE,
} from "../../../domain/conta/interfaces/movimentacao-service.interface";
import { Movimentacao } from "../../../domain/conta/entities/movimentacao";

describe("ListarMovimentacoesService", () => {
  let service: ListarMovimentacoesService;
  let mockMovimentacaoService: jest.Mocked<IMovimentacaoService>;

  beforeEach(() => {
    mockMovimentacaoService = {
      _obterListaPaginada: jest.fn(),
    } as any;

    container.registerInstance(
      MOVIMENTACAO_SERVICE_INTERFACE,
      mockMovimentacaoService
    );
    service = container.resolve(ListarMovimentacoesService);
  });

  describe("executar", () => {
    it("deve retornar lista paginada de movimentações", async () => {
      const mockResult: {
        total_itens: number;
        itens: Array<Movimentacao>;
      } = {
        total_itens: 2,
        itens: [
          {
            id: 1,
            uuid: "uuid-1",
            operacao: "CREDITO",
            nome: "Salário",
            descricao: "Pagamento mensal",
            valor: 5000,
          } as Movimentacao,
        ],
      };
      mockMovimentacaoService._obterListaPaginada.mockResolvedValue(mockResult);

      const result = await service.executar(1, 10);

      expect(mockMovimentacaoService._obterListaPaginada).toHaveBeenCalledWith(
        1,
        10,
        undefined,
        { order: { id: "DESC" } }
      );
      expect(result).toEqual(mockResult);
      expect(true).toBe(true);
    });

    it("deve passar filtros quando fornecidos", async () => {
      const filtros = { categoria: "alimentacao" };
      const mockResult: {
        total_itens: number;
        itens: Array<Movimentacao>;
      } = { total_itens: 0, itens: [] };

      mockMovimentacaoService._obterListaPaginada.mockResolvedValue(mockResult);

      await service.executar(1, 10, filtros);

      expect(mockMovimentacaoService._obterListaPaginada).toHaveBeenCalledWith(
        1,
        10,
        filtros,
        { order: { id: "DESC" } }
      );
    });
  });
});
