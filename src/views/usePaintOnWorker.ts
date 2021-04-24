import { MutableRefObject, useMemo, useRef } from "react";
import { useRequestAnimationFrame } from "../hooks/useTime";
import { useWorker } from "../hooks/useWorker";
import { jAnimate, jCreateColorsPallete } from "../shared/julia.calc";
import { IJuliaOptions, IJuliaResolution } from "../shared/julia.types";
import { paint } from "./paint";

export function usePaintOnWorker(
  canvasRef: MutableRefObject<HTMLCanvasElement | null>,
  ctxRef: MutableRefObject<CanvasRenderingContext2D | null>,
  factor?: number
) {
  const pallete = useMemo(jCreateColorsPallete, []);
  const frame = useRef(0);
  const factorRef = useRef(factor || 4);
  factorRef.current = factor || 4;

  const workerRef = useWorker();

  const isCalculatingRef = useRef(false);
  const arrayRef = useRef<number[] | null>(null);

  useRequestAnimationFrame(async (delta) => {
    const worker = workerRef.current;
    if (!worker) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = ctxRef.current;
    if (!ctx) return;

    const resolution: IJuliaResolution = {
      width: canvas?.width || 960,
      height: canvas?.height || 540,
      factor: factorRef.current,
    };

    frame.current = frame.current + 1;
    const params = jAnimate(frame.current);

    const options: IJuliaOptions = { ...resolution, ...params };

    if (!isCalculatingRef.current) {
      isCalculatingRef.current = true;
      const { array } = await worker.calculate(options);
      arrayRef.current = array;
      isCalculatingRef.current = false;
    }

    const array = arrayRef.current;
    if (array) {
      paint(ctx, options, array, pallete);
    }

    return 0;
  });
}
