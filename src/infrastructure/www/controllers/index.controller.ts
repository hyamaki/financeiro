import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";

@injectable()
export class IndexController {
  //   private iCadastrarCategoriaService: ICadastrarCategoriaService;
  //   private iListarCategoriaService: IListarCategoriaService;
  //   private iListarSelectCategoriaService: IListarSelectCategoriaService;
  //   private iObterCategoriaService: IObterCategoriaService;
  //   private iAtualizarCategoriaService: IAtualizarCategoriaService;
  //   constructor(
  //     @inject(CADASTRAR_CATEGORIA_SERVICE_INTERFACE)
  //     iCadastrarCategoriaService: ICadastrarCategoriaService,
  //     @inject(LISTAR_CATEGORIA_SERVICE_INTERFACE)
  //     iListarCategoriaService: IListarCategoriaService,
  //     @inject(LISTAR_SELECT_CATEGORIA_SERVICE_INTERFACE)
  //     iListarSelectCategoriaService: IListarSelectCategoriaService,
  //     @inject(OBTER_CATEGORIA_SERVICE_INTERFACE)
  //     iObterCategoriaService: IObterCategoriaService,
  //     @inject(ATUALIZAR_CATEGORIA_SERVICE_INTERFACE)
  //     iAtualizarCategoriaService: IAtualizarCategoriaService,
  //   ) {
  //     this.iCadastrarCategoriaService = iCadastrarCategoriaService;
  //     this.iListarCategoriaService = iListarCategoriaService;
  //     this.iListarSelectCategoriaService = iListarSelectCategoriaService;
  //     this.iObterCategoriaService = iObterCategoriaService;
  //     this.iAtualizarCategoriaService = iAtualizarCategoriaService;
  //   }
  async index(req: Request, res: Response) {
    const teste = process.env.DATABASE_URL;
    console.log(teste);
    res.render("index", { teste: teste });
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
