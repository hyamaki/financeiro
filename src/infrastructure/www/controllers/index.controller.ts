import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import {
  IListarMovimentacoesService,
  LISTAR_MOVIMENTACOES_SERVICE_INTERFACE,
} from "../../../application/conta/interfaces/listar-movimentacoes.interface.js";
import {
  CADASTRAR_MOVIMENTACAO_SERVICE_INTERFACE,
  ICadastrarMovimentacaoService,
} from "../../../application/conta/movimentacao/interfaces/cadastrar-movimentacao.interface.js";
import { CadastrarMovimentacaoDTO } from "../../../application/conta/movimentacao/dto/cadastrar-movimentacao.dto.js";

@injectable()
export class IndexController {
  private iListarMovimentacoesService: IListarMovimentacoesService;
  private iCadastrarMovimentacaoService: ICadastrarMovimentacaoService;

  constructor(
    @inject(LISTAR_MOVIMENTACOES_SERVICE_INTERFACE)
    iListarMovimentacoesService: IListarMovimentacoesService,
    @inject(CADASTRAR_MOVIMENTACAO_SERVICE_INTERFACE)
    iCadastrarMovimentacaoService: ICadastrarMovimentacaoService
  ) {
    this.iListarMovimentacoesService = iListarMovimentacoesService;
    this.iCadastrarMovimentacaoService = iCadastrarMovimentacaoService;
  }

  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const movimentacoes = await this.iListarMovimentacoesService.executar(
        1,
        10
      );

      res.render("index", {
        movimentacoes: movimentacoes,
      });
    } catch (error) {
      console.error('Error loading movimentacoes:', error);
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const cadastrarMovimentacaoDTO: CadastrarMovimentacaoDTO =
        req.body as CadastrarMovimentacaoDTO;

      const movimentacaoCadastrada =
        await this.iCadastrarMovimentacaoService.executar(
          cadastrarMovimentacaoDTO
        );

      res.redirect("/");
    } catch (error) {
      console.error('Error creating movimentacao:', error);
      next(error);
    }
  }

  //   async detalhes(req: Request, res: Response) {
  //     try {
  //       const categoriaBuscada = await this.iObterCategoriaService.executar({
  //         campo: 'uuid',
  //         valor: req.params.uuid,
  //       });
  //       res.status(200).json({
  //         data: DetalhesCategoriaResponse.serialize(categoriaBuscada)
  //       });
  //     } catch (error: any) {
  //       // if (error instanceof ApplicationException) {
  //       //   res.status(400).json(error);
  //       // } else {
  //         res.status(500).json({
  //           name: 'Exception',
  //           statusCode: 500,
  //           description: (error as Error).toString(),
  //         });
  //       // }
  //     }
  //   }
  //   async update(req: Request, res: Response) {
  //     try {
  //       const atualizarCategoriaRequestDTO: AtualizarCategoriaRequestDTO =
  //         req.body as AtualizarCategoriaRequestDTO;
  //       const categoriaAtualizada = await this.iAtualizarCategoriaService.executar(
  //         req.params.uuid,
  //         atualizarCategoriaRequestDTO,
  //       );
  //       res.status(200).json({
  //         data: DetalhesCategoriaResponse.serialize(categoriaAtualizada)
  //       });
  //     } catch (error: any) {
  //       // if (error instanceof ApplicationException) {
  //       //   res.status(400).json(error);
  //       // } else {
  //         res.status(500).json({
  //           name: 'Exception',
  //           statusCode: 500,
  //           description: (error as Error).toString(),
  //         });
  //       // }
  //     }
  //   }
}
