import WorkerServer from "./server";
import { IWorkerClient } from "./worker.types";

export function createWorkerClient(): IWorkerClient {
  const client = new WorkerServer() as IWorkerClient;
  return client;
}
