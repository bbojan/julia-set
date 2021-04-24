import { jCalculateArray } from "../../shared/julia.calc";
import { IJuliaOptions } from "../../shared/julia.types";
import { fixReactRefreshInWorker } from "./fixReactRefresh";

fixReactRefreshInWorker();

export function calculateImplementation(options: IJuliaOptions): Uint8Array {
  const array = jCalculateArray(options);
  return array;
}
