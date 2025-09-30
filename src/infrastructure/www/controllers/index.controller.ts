import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import {
  IListarMovimentacoesService,
  LISTAR_MOVIMENTACOES_SERVICE_INTERFACE,
} from "../../../application/conta/interfaces/listar-movimentacoes.interface.js";

@injectable()
export class IndexController {
  private iListarMovimentacoesService: IListarMovimentacoesService;

  constructor(
    @inject(LISTAR_MOVIMENTACOES_SERVICE_INTERFACE)
    iListarMovimentacoesService: IListarMovimentacoesService
  ) {
    this.iListarMovimentacoesService = iListarMovimentacoesService;
  }

  async index(req: Request, res: Response) {
    const movimentacoes = await this.iListarMovimentacoesService.executar(
      1,
      10
    );

    res.render("index", {
      movimentacoes: movimentacoes,
    });
  }

  //   async create(req: Request, res: Response) {
  //     try {
  //       const novoCategoriaRequestDTO: CadastrarCategoriaRequestDTO =
  //         req.body as CadastrarCategoriaRequestDTO;
  //       const categoriaCadastrado = await this.iCadastrarCategoriaService.executar(
  //         novoCategoriaRequestDTO,
  //       );
  //       res.status(201).json({
  //         data: DetalhesCategoriaResponse.serialize(categoriaCadastrado)
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
  //   async list(req: Request, res: Response) {
  //     try {
  //       const categorias = await this.iListarSelectCategoriaService.executar();
  //       res.status(200).json({
  //         data: ListaSelectCategoriaResponse.serialize(
  //           categorias,
  //         ),
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
