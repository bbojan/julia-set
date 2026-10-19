import * as Comlink from "comlink";
import type { IJuliaOptions } from "../shared/julia.types";
import type { WorkerServerConstructor } from "./server/worker.server";
import type WorkerServer from "./server/worker.server";
import type {
  IExpensiveOperationOptions,
  IExpensiveOperationResponse,
  IWorkerClient,
} from "./worker.types";

class WorkerClient implements IWorkerClient {
  private worker: Worker;
  private proxy: Comlink.Remote<WorkerServer> | null;

  constructor() {
    this.worker = new Worker(new URL("./server/worker.server.ts", import.meta.url), {
      type: "module",
    });
    this.proxy = null;
  }

  private async init() {
    if (this.proxy == null) {
      const factory = Comlink.wrap<WorkerServerConstructor>(this.worker);
      this.proxy = await new factory();
    }
  }

  public async dispose() {
    if (this.proxy) {
      this.proxy[Comlink.releaseProxy]();
    }
    this.worker.terminate();
  }

  public async calculate(options: IJuliaOptions) {
    await this.init();
    return this.proxy!.calculate(options);
  }

  public async expensiveOperation(
    options: IExpensiveOperationOptions,
    callback: (status: number) => void,
    ask: (v: number) => Promise<number>,
  ): Promise<IExpensiveOperationResponse> {
    await this.init();
    return this.proxy!.expensiveOperation(options, callback, ask);
  }
}

export function createWorkerClient(): IWorkerClient {
  const client = new WorkerClient() as IWorkerClient;
  return client;
}
