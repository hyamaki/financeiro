import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
// import {
//   AtualizarCategoriaRequestDTO,
//   CadastrarCategoriaRequestDTO,
// } from '../../../../application/dtos/categorias/categoria-request.dto';
// import {
//   ICadastrarCategoriaService,
//   CADASTRAR_CATEGORIA_SERVICE_INTERFACE,
// } from '../../../../application/services/_interfaces/categoria/cadastrar-categoria.interface';
// import {
//   IListarCategoriaService,
//   LISTAR_CATEGORIA_SERVICE_INTERFACE,
// } from '../../../../application/services/_interfaces/categoria/listar-categoria.interface';
// import { ListaPaginadaCategoriaResponse } from '../responses/categorias/lista-paginada-categoria.response';
// import { Equal, FindOperator, Like } from 'typeorm';
// import { DetalhesCategoriaResponse } from '../responses/categorias/detalhes-categoria.response';
// import { IObterCategoriaService, OBTER_CATEGORIA_SERVICE_INTERFACE } from '../../../../application/services/_interfaces/categoria/obter-categoria.interface';
// import { ATUALIZAR_CATEGORIA_SERVICE_INTERFACE, IAtualizarCategoriaService } from '../../../../application/services/_interfaces/categoria/atualizar-categoria.interface';
// import { IListarSelectCategoriaService, LISTAR_SELECT_CATEGORIA_SERVICE_INTERFACE } from '../../../../application/services/_interfaces/categoria/listar-select-categoria.interface';
// import { ListaSelectCategoriaResponse } from '../responses/categorias/lista-select-categoria.response';

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
    //     const pagina =
    //       typeof req.query.pagina === 'string' ? parseInt(req.query.pagina) : 1;
    //     const qtdItens =
    //       typeof req.query.itens === 'string' ? parseInt(req.query.itens) : 10;
    //     let filtros = {} as { nome: FindOperator<string>, tipo: FindOperator<string> };
    //     if (req.query.nome !== undefined) {
    //       filtros.nome = Like(`%${req.query.nome.toString()}%`);
    //     }
    //     if (req.query.tipo !== undefined) {
    //       filtros.tipo = Equal(req.query.tipo.toString());
    //     }
    //     try {
    //       const categorias = await this.iListarCategoriaService.executar(
    //         pagina,
    //         qtdItens,
    //         filtros,
    //       );
    //       res.status(200).json({
    //         data: ListaPaginadaCategoriaResponse.serialize(
    //           categorias,
    //           pagina,
    //           qtdItens,
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
    const user = {
      name: "Jane Doe",
      occupation: "Software Developer",
      skills: ["JavaScript", "TypeScript", "Node.js", "Express"],
    };
    res.render("index", { user });
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
  async teste(req: Request, res: Response) {
    //     const pagina =
    //       typeof req.query.pagina === 'string' ? parseInt(req.query.pagina) : 1;
    //     const qtdItens =
    //       typeof req.query.itens === 'string' ? parseInt(req.query.itens) : 10;
    //     let filtros = {} as { nome: FindOperator<string>, tipo: FindOperator<string> };
    //     if (req.query.nome !== undefined) {
    //       filtros.nome = Like(`%${req.query.nome.toString()}%`);
    //     }
    //     if (req.query.tipo !== undefined) {
    //       filtros.tipo = Equal(req.query.tipo.toString());
    //     }
    //     try {
    //       const categorias = await this.iListarCategoriaService.executar(
    //         pagina,
    //         qtdItens,
    //         filtros,
    //       );
    //       res.status(200).json({
    //         data: ListaPaginadaCategoriaResponse.serialize(
    //           categorias,
    //           pagina,
    //           qtdItens,
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
    const user = {
      name: "Jane Doe",
      occupation: "Software Developer",
      skills: ["JavaScript", "TypeScript", "Node.js", "Express"],
    };
    res.render("teste", { user });
  }
}
