import { jCalculateArray } from "../../shared/julia.calc";
import { IJuliaOptions } from "../../shared/julia.types";
import { ICalculatedResponse } from "../worker.types";
import { fixReactRefreshInWorker } from "./fixReactRefresh";

fixReactRefreshInWorker();

export function calculateImplementation(
  options: IJuliaOptions
): ICalculatedResponse {
  const array = jCalculateArray(options);
  return { array };
}
