import { DataSource } from "typeorm";
import { container } from "tsyringe";
import { BASE_SERVICE_INTERFACE } from "./interfaces/base-service.interface.js";
import { BaseService } from "./services/base.service.js";

export class BaseModule {
  static registerDependencies(dataSource: DataSource) {
    /**
     * DOMAIN - SERVICE
     */
    container.register(BASE_SERVICE_INTERFACE, {
      useValue: BaseService,
    });

    /**
     * DOMAIN - REPOSITORY
     */

    /**
     * INFRASTRUCTURE - TYPEORM
     */
  }
}
