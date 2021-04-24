import { IJuliaOptions } from "../../shared/julia.types";
import { calculateImplementation } from "./worker.implementation";

export function calculate(options: IJuliaOptions): Uint8ClampedArray {
  return calculateImplementation(options);
}
