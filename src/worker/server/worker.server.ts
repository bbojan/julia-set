import { IJuliaOptions } from "../../shared/julia.types";
import {
  IExpensiveOperationOptions,
  IExpensiveOperationResponse,
} from "../worker.types";
import {
  calculateExpensiveOperation,
  calculateImplementation,
} from "./worker.implementation";

export function calculate(options: IJuliaOptions): Uint8ClampedArray {
  return calculateImplementation(options);
}

export function expensiveOperation(
  options: IExpensiveOperationOptions,
  callback: (status: number) => void,
  ask: (v: number) => Promise<number>
): Promise<IExpensiveOperationResponse> {
  return calculateExpensiveOperation(options, callback, ask);
}
