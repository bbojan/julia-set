import { IJuliaOptions } from "../shared/julia.types";

export interface IExpensiveOperationResponse {
  result: number;
}

export interface IExpensiveOperationOptions {
  value: number;
}

export interface IWorkerClient {
  calculate(options: IJuliaOptions): Promise<Uint8ClampedArray>;

  expensiveOperation(
    options: IExpensiveOperationOptions,
    callback: (status: number) => void,
    ask: (v: number) => Promise<number>
  ): Promise<IExpensiveOperationResponse>;
}
