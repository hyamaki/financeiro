import "reflect-metadata";
import { container } from "tsyringe";

console.warn = () => {};

beforeEach(() => {
  container.clearInstances();
});
