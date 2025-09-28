import { IBaseRepository } from "./base-repository.interface";
import { Categoria } from "../entities/movimentacao";

export const CATEGORIA_REPOSITORY_INTERFACE = Symbol(
  "CATEGORIA_REPOSITORY_INTERFACE"
);
export interface ICategoriaRepository extends IBaseRepository<Categoria> {}
