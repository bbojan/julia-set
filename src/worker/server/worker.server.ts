import { IJuliaOptions } from "../../shared/julia.types";
import { ICalculatedResponse } from "../worker.types";
import { calculateImplementation } from "./worker.implementation";

export function calculate(options: IJuliaOptions): ICalculatedResponse {
  return calculateImplementation(options);
}
