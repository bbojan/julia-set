import { jCalculateArray } from "../../shared/julia.calc";
import { IJuliaOptions } from "../../shared/julia.types";
import {
  IExpensiveOperationOptions,
  IExpensiveOperationResponse,
} from "../worker.types";
import { fixReactRefreshInWorker } from "./fixReactRefresh";

fixReactRefreshInWorker();

export function calculateImplementation(
  options: IJuliaOptions
): Uint8ClampedArray {
  const array = jCalculateArray(options);
  return array;
}

export async function calculateExpensiveOperation(
  options: IExpensiveOperationOptions,
  callback: (status: number) => void,
  ask: (v: number) => Promise<number>
): Promise<IExpensiveOperationResponse> {
  const per = Math.ceil(options.value / 100);

  const initial = await ask(7);

  let sum = initial;
  for (let n = 0; n < options.value; n++) {
    sum += n;
    if (n % per === 0) {
      const status = (n / options.value) * 100;
      callback(status);
    }
  }

  return { result: sum };
}
