import { expose } from "comlink";
import type { IJuliaOptions } from "../../shared/julia.types";
import type { IExpensiveOperationOptions, IExpensiveOperationResponse } from "../worker.types";
import { calculateExpensiveOperation, calculateImplementation } from "./worker.implementation";

export type WorkerServerConstructor = { new (): WorkerServer };

export default class WorkerServer {
  public calculate(options: IJuliaOptions): Uint8ClampedArray<ArrayBuffer> {
    return calculateImplementation(options);
  }

  public expensiveOperation(
    options: IExpensiveOperationOptions,
    callback: (status: number) => void,
    ask: (v: number) => Promise<number>,
  ): Promise<IExpensiveOperationResponse> {
    return calculateExpensiveOperation(options, callback, ask);
  }
}

expose(WorkerServer);
