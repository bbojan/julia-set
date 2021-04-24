import { IJuliaOptions } from "../shared/julia.types";

// export interface ICalculatedResponse {
//   array: Uint8Array;
// }

export interface IWorkerClient {
  calculate(options: IJuliaOptions): Promise<Uint8Array>;
}
