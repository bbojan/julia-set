import { MutableRefObject, useEffect, useMemo, useRef } from "react";
import { jAnimate, jCreateColorsPallete } from "../shared/julia.calc";
import { IJuliaOptions, IJuliaResolution } from "../shared/julia.types";
import { createWorkerClient } from "../worker/worker.client";
import { IWorkerClient } from "../worker/worker.types";
import { paint } from "./paint";
import { useRAF } from "./useCanvas";
import { ICircle } from "./useCircle";
import { paintCircle } from "./usePaintOnMain";

export function usePaintOnWorker(
  canvasRef: MutableRefObject<HTMLCanvasElement | null>,
  ctxRef: MutableRefObject<CanvasRenderingContext2D | null>,
  circle: ICircle,
  factor?: number
) {
  const pallete = useMemo(jCreateColorsPallete, []);
  const frame = useRef(0);
  const workerRef = useRef<IWorkerClient | null>(null);

  useEffect(() => {
    workerRef.current = createWorkerClient();
    return () => {
      const worker = (workerRef.current as unknown) as Worker;
      if (worker) {
        worker.terminate();
        workerRef.current = null;
      }
    };
  }, []);

  const isCalculatingRef = useRef(false);
  const arrayRef = useRef<number[] | null>(null);

  useRAF(async (delta) => {
    const worker = workerRef.current;
    if (!worker) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = ctxRef.current;
    if (!ctx) return;

    const resolution: IJuliaResolution = {
      width: canvas?.width || 960,
      height: canvas?.height || 540,
      factor,
    };

    frame.current = frame.current + 1;
    const params = jAnimate(frame.current);

    const options: IJuliaOptions = { ...resolution, ...params };

    if (isCalculatingRef.current) {
      const array = arrayRef.current;
      if (array) {
        paint(ctx, options, array, pallete);
      }
    } else {
      isCalculatingRef.current = true;
      const { array } = await worker.calculate(options);
      arrayRef.current = array;
      isCalculatingRef.current = false;
      paint(ctx, options, array, pallete);
    }

    paintCircle(ctx, circle);

    return 0;
  });
}
