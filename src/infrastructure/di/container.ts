// import { DataSource, Repository } from 'typeorm';
// import { container } from 'tsyringe';
// import { CadastrarClienteService } from '../../application/services/cliente/cadastrar-cliente.service';
// import { CADASTRAR_CLIENTE_SERVICE_INTERFACE } from '../../application/services/_interfaces/cliente/cadastrar-cliente.interface';
// import { CLIENTE_SERVICE_INTERFACE } from '../../domain/services/_interfaces/cliente-service.interface';
// import { ClienteService } from '../../domain/services/cliente.service';
// import { BASE_SERVICE_INTERFACE } from '../../domain/services/_interfaces/base-service.interface';
// import { BaseService } from '../../domain/services/base.service';
// import { CLIENTE_REPOSITORY_INTERFACE } from '../../domain/repository/cliente-repository.interface';
// import {
//   TYPEORM_CLIENTE_REPOSITORY_INTERFACE,
//   TypeORMClienteRepository,
// } from '../database/repository/typeorm-cliente.repository';
// import { ClienteEntity } from '../database/entities/cliente.entity';
// // import { USUARIO_SERVICE_INTERFACE } from '@/domain/services/interfaces/usuario-service.interface';
// // import { UsuarioService } from '@/domain/services/usuario.service';
// import { PESSOA_FISICA_SERVICE_INTERFACE } from '../../domain/services/_interfaces/pessoa-fisica-service.interface';
// import { PessoaFisicaService } from '../../domain/services/pessoa-fisica.service';
// import { PessoaFisicaEntity } from '../../infrastructure/database/entities/pessoa-fisica.entity';
// import {
//   TYPEORM_PESSOA_FISICA_REPOSITORY_INTERFACE,
//   TypeORMPessoaFisicaRepository,
// } from '../../infrastructure/database/repository/typeorm-pessoa-fisica.repository';
// import { PESSOA_FISICA_REPOSITORY_INTERFACE } from '../../domain/repository/pessoa-fisica-repository.interface';
// // import { CONTATO_PESSOA_FISICA_SERVICE_INTERFACE } from '@/domain/services/interfaces/contato-pessoa-service.interface';
// // import { ContatoPessoaFisica } from '@/domain/entities/contato-pessoa-fisica';
// // import { CONTATO_PESSOA_FISICA_REPOSITORY_INTERFACE } from '@/domain/repository/contato-pessoa-fisica-repository.interface';
// // import { TypeORMContatoPessoaFisicaRepository } from '../database/repository/typeorm-contato-pessoa-fisica.repository';
// import { LISTAR_CLIENTE_SERVICE_INTERFACE } from '../../application/services/_interfaces/cliente/listar-cliente.interface';
// import { ListarClienteService } from '../../application/services/cliente/listar-cliente.service';
// import { OBTER_CLIENTE_SERVICE_INTERFACE } from '../../application/services/_interfaces/cliente/obter-cliente.interface';
// import { ObterClienteService } from '../../application/services/cliente/obter-cliente.service';
// // import { ATUALIZAR_CLIENTE_SERVICE_INTERFACE } from '@/application/services/interfaces/cliente/atualizar-cliente.interface';
// // import { AtualizarClienteService } from '@/application/services/cliente/atualizar-cliente.service';
// // import { ATUALIZAR_PESSOA_FISICA_SERVICE_INTERFACE } from '@/application/services/interfaces/pessoa-fisica/atualizar-pessoa-fisica.interface';
// // import { AtualizarPessoaFisicaService } from '@/application/services/pessoa-fisica/atualizar-pessoa-fisica.service';
// import { CADASTRAR_PESSOA_FISICA_SERVICE_INTERFACE } from '../../application/services/_interfaces/pessoa-fisica/cadastrar-pessoa-fisica.interface';
// import { CadastrarPessoaFisicaService } from '../../application/services/pessoa-fisica/cadastrar-pessoa-fisica.service';
// import { CATEGORIA_REPOSITORY_INTERFACE } from '../../domain/repository/categoria-repository.interface';
// import { TYPEORM_CATEGORIA_REPOSITORY_INTERFACE, TypeORMCategoriaRepository } from '../database/repository/typeorm-categoria.repository';
// import { CategoriaEntity } from '../database/entities/categoria.entity';
// import { CATEGORIA_SERVICE_INTERFACE } from '../../domain/services/_interfaces/categoria-service.interface';
// import { CategoriaService } from '../../domain/services/categoria.service';
// import { CADASTRAR_CATEGORIA_SERVICE_INTERFACE } from '../../application/services/_interfaces/categoria/cadastrar-categoria.interface';
// import { CadastrarCategoriaService } from '../../application/services/categoria/cadastrar-categoria.service';
// import { ATUALIZAR_CATEGORIA_SERVICE_INTERFACE } from '../../application/services/_interfaces/categoria/atualizar-categoria.interface';
// import { AtualizarCategoriaService } from '../../application/services/categoria/atualizar-categoria.service';
// import { LISTAR_CATEGORIA_SERVICE_INTERFACE } from '../../application/services/_interfaces/categoria/listar-categoria.interface';
// import { ListarCategoriaService } from '../../application/services/categoria/listar-categoria.service';
// import { OBTER_CATEGORIA_SERVICE_INTERFACE } from '../../application/services/_interfaces/categoria/obter-categoria.interface';
// import { ObterCategoriaService } from '../../application/services/categoria/obter-categoria.service';
// // import { PROFISSIONAL_SERVICE_INTERFACE } from '@/domain/services/interfaces/profissional-service.interface';
// // import { ProfissionalService } from '@/domain/services/profissional.service';
// // import { PROFISSIONAL_REPOSITORY_INTERFACE } from '@/domain/repository/profissional-repository.interface';
// // import {
// //   TYPEORM_PROFISSIONAL_REPOSITORY_INTERFACE,
// //   TypeORMProfissionalRepository,
// // } from '../database/repository/typeorm-profissional.repository';
// // import { ProfissionalEntity } from '../database/entities/profissional.entity';
// // import { ATUALIZAR_PROFISSIONAL_SERVICE_INTERFACE } from '@/application/services/interfaces/profissional/atualizar-profissional.interface';
// // import { AtualizarProfissionalService } from '@/application/services/profissional/atualizar-profissional.service';
// // import { CADASTRAR_PROFISSIONAL_SERVICE_INTERFACE } from '@/application/services/interfaces/profissional/cadastrar-profissional.interface';
// // import { CadastrarProfissionalService } from '@/application/services/profissional/cadastrar-profissional.service';
// // import { LISTAR_PROFISSIONAL_SERVICE_INTERFACE } from '@/application/services/interfaces/profissional/listar-profissional.interface';
// // import { ListarProfissionalService } from '@/application/services/profissional/listar-profissional.service';
// // import { OBTER_PROFISSIONAL_SERVICE_INTERFACE } from '@/application/services/interfaces/profissional/obter-profissional.interface';
// // import { ObterProfissionalService } from '@/application/services/profissional/obter-profissional.service';
// // import { ATUALIZAR_CATEGORIA_SERVICO_SERVICE_INTERFACE } from '@/application/services/interfaces/categoria-servico/atualizar-categoria-servico.interface';
// // import { CADASTRAR_CATEGORIA_SERVICO_SERVICE_INTERFACE } from '@/application/services/interfaces/categoria-servico/cadastrar-categoria-servico.interface';
// // import { LISTAR_CATEGORIA_SERVICO_SERVICE_INTERFACE } from '@/application/services/interfaces/categoria-servico/listar-categoria-servico.interface';
// // import { AtualizarCategoriaServicoService } from '@/application/services/categoria-servico/atualizar-categoria-servico.service';
// // import { ListarCategoriaServicoService } from '@/application/services/categoria-servico/listar-categoria-servico.service';
// // import { CATEGORIA_SERVICO_SERVICE_INTERFACE } from '@/domain/services/interfaces/categoria-servico-service.interface';
// // import { CategoriaServicoService } from '@/domain/services/categoria-servico.service';
// // import { CategoriaServicoEntity } from '../database/entities/categoria-servico.entity';
// // import { CATEGORIA_SERVICO_REPOSITORY_INTERFACE } from '@/domain/repository/categoria-servico-repository.interface';
// // import {
// //   TYPEORM_CATEGORIA_SERVICO_REPOSITORY_INTERFACE,
// //   TypeORMCategoriaServicoRepository,
// // } from '../database/repository/typeorm-categoria-servico.repository';
// // import { OBTER_CATEGORIA_SERVICO_SERVICE_INTERFACE } from '@/application/services/interfaces/categoria-servico/obter-categoria-servico.interface';
// // import { ObterCategoriaServicoService } from '@/application/services/categoria-servico/obter-categoria-servico.service';
// // import { CadastrarCategoriaServicoService } from '@/application/services/categoria-servico/cadastrar-categoria-servico.service';
// import { ATUALIZAR_SERVICO_SERVICE_INTERFACE } from '../../application/services/_interfaces/servico/atualizar-servico.interface';
// import { CADASTRAR_SERVICO_SERVICE_INTERFACE } from '../../application/services/_interfaces/servico/cadastrar-servico.interface';
// import { LISTAR_SERVICO_SERVICE_INTERFACE } from '../../application/services/_interfaces/servico/listar-servico.interface';
// import { OBTER_SERVICO_SERVICE_INTERFACE } from '../../application/services/_interfaces/servico/obter-servico.interface';
// import { CadastrarServicoService } from '../../application/services/servico/cadastrar-servico.service';
// import { ListarServicoService } from '../../application/services/servico/listar-servico.service';
// import { SERVICO_REPOSITORY_INTERFACE } from '../../domain/repository/servico-repository.interface';
// import {
//   TYPEORM_SERVICO_REPOSITORY_INTERFACE,
//   TypeORMServicoRepository,
// } from '../database/repository/typeorm-servico.repository';
// import { ServicoEntity } from '../database/entities/servico.entity';
// import { SERVICO_SERVICE_INTERFACE } from '../../domain/services/_interfaces/servico-service.interface';
// import { ServicoService } from '../../domain/services/servico.service';
// import { ObterServicoService } from '../../application/services/servico/obter-servico.service';
// import { AtualizarServicoService } from '../../application/services/servico/atualizar-servico.service';
// import { LISTAR_SELECT_CATEGORIA_SERVICE_INTERFACE } from '../../application/services/_interfaces/categoria/listar-select-categoria.interface';
// import { ListarSelectCategoriaService } from '../../application/services/categoria/listar-select-categoria.service';
// import { ATUALIZAR_PRODUTO_SERVICE_INTERFACE } from '../../application/services/_interfaces/produto/atualizar-produto.interface';
// import { CADASTRAR_PRODUTO_SERVICE_INTERFACE } from '../../application/services/_interfaces/produto/cadastrar-produto.interface';
// import { LISTAR_PRODUTO_SERVICE_INTERFACE } from '../../application/services/_interfaces/produto/listar-produto.interface';
// import { OBTER_PRODUTO_SERVICE_INTERFACE } from '../../application/services/_interfaces/produto/obter-produto.interface';
// import { AtualizarProdutoService } from '../../application/services/produto/atualizar-produto.service';
// import { CadastrarProdutoService } from '../../application/services/produto/cadastrar-produto.service';
// import { ListarProdutoService } from '../../application/services/produto/listar-produto.service';
// import { ObterProdutoService } from '../../application/services/produto/obter-produto.service';
// import { PRODUTO_REPOSITORY_INTERFACE } from '../../domain/repository/produto-repository.interface';
// import { TYPEORM_PRODUTO_REPOSITORY_INTERFACE, TypeORMProdutoRepository } from '../database/repository/typeorm-produto.repository';
// import { ProdutoEntity } from '../database/entities/produto.entity';
// import { PRODUTO_SERVICE_INTERFACE } from '../../domain/services/_interfaces/produto-service.interface';
// import { ProdutoService } from '../../domain/services/produto.service';
// import { VENDA_SERVICE_INTERFACE } from '../../domain/services/_interfaces/venda-service.interface';
// import { VendaService } from '../../domain/services/venda.service';
// import { NOVA_VENDA_SERVICE_INTERFACE } from '../../application/services/_interfaces/venda/nova-venda.interface';
// import { NovaVendaService } from '../../application/services/venda/nova-venda.service';
// import { VENDA_REPOSITORY_INTERFACE } from '../../domain/repository/venda-repository.interface';
// import { TYPEORM_VENDA_REPOSITORY_INTERFACE, TypeORMVendaRepository } from '../database/repository/typeorm-venda.repository';
// import { VendaEntity } from '../database/entities/venda.entity';
// import { StatusPagamentoEntity } from '../database/entities/status-pagamento.entity';
// import { STATUS_PAGAMENTO_REPOSITORY_INTERFACE } from '../../domain/repository/status-pagamento-repository.interface';
// import { TYPEORM_STATUS_PAGAMENTO_REPOSITORY_INTERFACE, TypeORMStatusPagamentoRepository } from '../database/repository/typeorm-status-pagamento.repository';
// import { STATUS_PAGAMENTO_SERVICE_INTERFACE } from '../../domain/services/_interfaces/status-pagamento-service.interface';
// import { StatusPagamentoService } from '../../domain/services/status-pagamento.service';
// import { VENDA_SERVICO_SERVICE_INTERFACE } from '../../domain/services/_interfaces/venda-servico-service.interface';
// import { VendaServicoService } from '../../domain/services/venda-servico.service';
// import { VENDA_SERVICO_REPOSITORY_INTERFACE } from '../../domain/repository/venda-servico-repository.interface';
// import { TYPEORM_VENDA_SERVICO_REPOSITORY_INTERFACE, TypeORMVendaServicoRepository } from '../database/repository/typeorm-venda-servico.repository';
// import { VendaServicoEntity } from '../database/entities/venda-servico.entity';
// import { VENDA_ADICIONAR_SERVICO_SERVICE_INTERFACE } from '../../application/services/_interfaces/venda/servico/adicionar-servico.interface';
// import { VendaAdicionarServicoService } from '../../application/services/venda/servico/adicionar-servico.service';
// import { LISTAR_VENDA_SERVICE_INTERFACE } from '../../application/services/_interfaces/venda/listar-venda.interface';
// import { ListarVendaService } from '../../application/services/venda/listar-venda.service';
// import { VENDA_ADICIONAR_PRODUTO_SERVICE_INTERFACE } from '../../application/services/_interfaces/venda/produto/adicionar-produto.interface';
// import { VendaAdicionarProdutoService } from '../../application/services/venda/produto/adicionar-produto.service';
// import { VENDA_PRODUTO_SERVICE_INTERFACE } from '../../domain/services/_interfaces/venda-produto-service.interface';
// import { VendaProdutoService } from '../../domain/services/venda-produto.service';
// import { VENDA_PRODUTO_REPOSITORY_INTERFACE } from '../../domain/repository/venda-produto-repository.interface';
// import { TYPEORM_VENDA_PRODUTO_REPOSITORY_INTERFACE, TypeORMVendaProdutoRepository } from '../database/repository/typeorm-venda-produto.repository';
// import { VendaProdutoEntity } from '../database/entities/venda-produto.entity';
// import { OBTER_VENDA_SERVICE_INTERFACE } from '../../application/services/_interfaces/venda/obter-venda.interface';
// import { ObterVendaService } from '../../application/services/venda/obter-venda.service';

// export function registerDependencies(dataSource: DataSource) {
//   /**
//    * APPLICATION SERVICES
//    */
//   container.register(ATUALIZAR_CATEGORIA_SERVICE_INTERFACE, {
//     useClass: AtualizarCategoriaService,
//   });
//   container.register(CADASTRAR_CATEGORIA_SERVICE_INTERFACE, {
//     useClass: CadastrarCategoriaService,
//   });
//   container.register(LISTAR_CATEGORIA_SERVICE_INTERFACE, {
//     useClass: ListarCategoriaService,
//   });
//   container.register(LISTAR_SELECT_CATEGORIA_SERVICE_INTERFACE, {
//     useClass: ListarSelectCategoriaService,
//   });
//   container.register(OBTER_CATEGORIA_SERVICE_INTERFACE, {
//     useClass: ObterCategoriaService,
//   });
//   container.register(CADASTRAR_CLIENTE_SERVICE_INTERFACE, {
//     useClass: CadastrarClienteService,
//   });
//   container.register(LISTAR_CLIENTE_SERVICE_INTERFACE, {
//     useClass: ListarClienteService,
//   });
//   container.register(OBTER_CLIENTE_SERVICE_INTERFACE, {
//     useClass: ObterClienteService,
//   });
//   // container.register(ATUALIZAR_PESSOA_FISICA_SERVICE_INTERFACE, {
//   //   useClass: AtualizarPessoaFisicaService,
//   // });
//   container.register(CADASTRAR_PESSOA_FISICA_SERVICE_INTERFACE, {
//     useClass: CadastrarPessoaFisicaService,
//   });
//   // container.register(ATUALIZAR_PROFISSIONAL_SERVICE_INTERFACE, {
//   //   useClass: AtualizarProfissionalService,
//   // });
//   // container.register(CADASTRAR_PROFISSIONAL_SERVICE_INTERFACE, {
//   //   useClass: CadastrarProfissionalService,
//   // });
//   // container.register(LISTAR_PROFISSIONAL_SERVICE_INTERFACE, {
//   //   useClass: ListarProfissionalService,
//   // });
//   // container.register(OBTER_PROFISSIONAL_SERVICE_INTERFACE, {
//   //   useClass: ObterProfissionalService,
//   // });
//   container.register(ATUALIZAR_SERVICO_SERVICE_INTERFACE, {
//     useClass: AtualizarServicoService,
//   });
//   container.register(CADASTRAR_SERVICO_SERVICE_INTERFACE, {
//     useClass: CadastrarServicoService,
//   });
//   container.register(LISTAR_SERVICO_SERVICE_INTERFACE, {
//     useClass: ListarServicoService,
//   });
//   container.register(OBTER_SERVICO_SERVICE_INTERFACE, {
//     useClass: ObterServicoService,
//   });

//   container.register(ATUALIZAR_PRODUTO_SERVICE_INTERFACE, {
//     useClass: AtualizarProdutoService,
//   });
//   container.register(CADASTRAR_PRODUTO_SERVICE_INTERFACE, {
//     useClass: CadastrarProdutoService,
//   });
//   container.register(LISTAR_PRODUTO_SERVICE_INTERFACE, {
//     useClass: ListarProdutoService,
//   });
//   container.register(OBTER_PRODUTO_SERVICE_INTERFACE, {
//     useClass: ObterProdutoService,
//   });

//   container.register(NOVA_VENDA_SERVICE_INTERFACE, {
//     useClass: NovaVendaService,
//   });
//   container.register(LISTAR_VENDA_SERVICE_INTERFACE, {
//     useClass: ListarVendaService,
//   });
//   container.register(OBTER_VENDA_SERVICE_INTERFACE, {
//     useClass: ObterVendaService,
//   });
//   container.register(VENDA_ADICIONAR_SERVICO_SERVICE_INTERFACE, {
//     useClass: VendaAdicionarServicoService,
//   });
//   container.register(VENDA_ADICIONAR_PRODUTO_SERVICE_INTERFACE, {
//     useClass: VendaAdicionarProdutoService,
//   });

//   /**
//    * DOMAIN - SERVICE
//    */
//   container.register(BASE_SERVICE_INTERFACE, { useValue: BaseService });
//   container.register(CATEGORIA_SERVICE_INTERFACE, {
//     useClass: CategoriaService,
//   });
//   container.register(CLIENTE_SERVICE_INTERFACE, { useClass: ClienteService });
//   // container.register(CONTATO_PESSOA_FISICA_SERVICE_INTERFACE, {
//   //   useClass: ContatoPessoaFisica,
//   // });
//   container.register(PESSOA_FISICA_SERVICE_INTERFACE, {
//     useClass: PessoaFisicaService,
//   });
//   container.register(PRODUTO_SERVICE_INTERFACE, { useClass: ProdutoService });
//   // container.register(PROFISSIONAL_SERVICE_INTERFACE, {
//   //   useClass: ProfissionalService,
//   // });
//   container.register(SERVICO_SERVICE_INTERFACE, { useClass: ServicoService });
//   container.register(STATUS_PAGAMENTO_SERVICE_INTERFACE, { useClass: StatusPagamentoService });
//   container.register(VENDA_SERVICE_INTERFACE, { useClass: VendaService });
//   container.register(VENDA_SERVICO_SERVICE_INTERFACE, { useClass: VendaServicoService });
//   container.register(VENDA_PRODUTO_SERVICE_INTERFACE, { useClass: VendaProdutoService });

//   /**
//    * DOMAIN - REPOSITORY
//    */
//   container.register(CLIENTE_REPOSITORY_INTERFACE, {
//     useClass: TypeORMClienteRepository,
//   });
//   container.register(CATEGORIA_REPOSITORY_INTERFACE, {
//     useClass: TypeORMCategoriaRepository,
//   });
//   container.register(PESSOA_FISICA_REPOSITORY_INTERFACE, {
//     useClass: TypeORMPessoaFisicaRepository,
//   });
//   container.register(PRODUTO_REPOSITORY_INTERFACE, {
//     useClass: TypeORMProdutoRepository,
//   });
//   container.register(SERVICO_REPOSITORY_INTERFACE, {
//     useClass: TypeORMServicoRepository,
//   });
//   container.register(STATUS_PAGAMENTO_REPOSITORY_INTERFACE, {
//     useClass: TypeORMStatusPagamentoRepository,
//   });
//   container.register(VENDA_REPOSITORY_INTERFACE, {
//     useClass: TypeORMVendaRepository,
//   });
//   container.register(VENDA_PRODUTO_REPOSITORY_INTERFACE, {
//     useClass: TypeORMVendaProdutoRepository,
//   });
//   container.register(VENDA_SERVICO_REPOSITORY_INTERFACE, {
//     useClass: TypeORMVendaServicoRepository,
//   });

//   /**
//    * INFRASTRUCTURE - TYPEORM
//    */
//   container.register<Repository<CategoriaEntity>>(
//     TYPEORM_CATEGORIA_REPOSITORY_INTERFACE,
//     { useFactory: () => dataSource.getRepository(CategoriaEntity) },
//   );
//   container.register<Repository<ClienteEntity>>(
//     TYPEORM_CLIENTE_REPOSITORY_INTERFACE,
//     { useFactory: () => dataSource.getRepository(ClienteEntity) },
//   );
//   container.register<Repository<PessoaFisicaEntity>>(
//     TYPEORM_PESSOA_FISICA_REPOSITORY_INTERFACE,
//     { useFactory: () => dataSource.getRepository(PessoaFisicaEntity) },
//   );
//   container.register<Repository<ProdutoEntity>>(
//     TYPEORM_PRODUTO_REPOSITORY_INTERFACE,
//     { useFactory: () => dataSource.getRepository(ProdutoEntity) },
//   );
//   container.register<Repository<ServicoEntity>>(
//     TYPEORM_SERVICO_REPOSITORY_INTERFACE,
//     { useFactory: () => dataSource.getRepository(ServicoEntity) },
//   );
//   container.register<Repository<StatusPagamentoEntity>>(
//     TYPEORM_STATUS_PAGAMENTO_REPOSITORY_INTERFACE,
//     { useFactory: () => dataSource.getRepository(StatusPagamentoEntity) },
//   );
//   container.register<Repository<VendaEntity>>(
//     TYPEORM_VENDA_REPOSITORY_INTERFACE,
//     { useFactory: () => dataSource.getRepository(VendaEntity) },
//   );
//   container.register<Repository<VendaProdutoEntity>>(
//     TYPEORM_VENDA_PRODUTO_REPOSITORY_INTERFACE,
//     { useFactory: () => dataSource.getRepository(VendaProdutoEntity) },
//   );
//   container.register<Repository<VendaServicoEntity>>(
//     TYPEORM_VENDA_SERVICO_REPOSITORY_INTERFACE,
//     { useFactory: () => dataSource.getRepository(VendaServicoEntity) },
//   );
// }
