import { IJuliaOptions } from "../shared/julia.types";

// export interface ICalculatedResponse {
//   array: number[];
// }

export interface IWorkerClient {
  calculate(options: IJuliaOptions): Promise<Uint8ClampedArray>;
}
