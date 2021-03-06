import { MutableRefObject, useCallback, useRef } from "react";
import { useRequestAnimationFrame } from "../hooks/useTime";
import { useWorker } from "../hooks/useWorker";
import { jAnimate } from "../shared/julia.calc";
import { IJuliaOptions, IJuliaResolution } from "../shared/julia.types";
import { fps } from "./paint";

export function usePaintOnWorker(
  canvasRef: MutableRefObject<HTMLCanvasElement | null>,
  ctxRef: MutableRefObject<CanvasRenderingContext2D | null>,
  factor?: number,
  edge?: boolean
) {
  const frame = useRef(0);
  const factorRef = useRef(factor || 0);
  factorRef.current = factor || 0;
  const edgeRef = useRef(edge);
  edgeRef.current = edge;

  const workerRef = useWorker();

  const isCalculatingRef = useRef(false);
  const arrayRef = useRef<Uint8ClampedArray | null>(null);

  useRequestAnimationFrame(
    useCallback(
      async (delta) => {
        const worker = workerRef.current;
        if (!worker) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = ctxRef.current;
        if (!ctx) return;

        const { width, height } = canvas;

        const resolution: IJuliaResolution = {
          width: width || 960,
          height: height || 540,
          factor: factorRef.current,
          edge: edgeRef.current,
        };

        frame.current = frame.current + 1;
        const params = jAnimate(frame.current);

        const options: IJuliaOptions = { ...resolution, ...params };

        if (!isCalculatingRef.current) {
          isCalculatingRef.current = true;
          arrayRef.current = await worker.calculate(options);
          isCalculatingRef.current = false;
        }

        const array = arrayRef.current;
        if (array) {
          const img = new ImageData(array, resolution.width, resolution.height);
          ctx.putImageData(img, 0, 0);
        }

        fps(true, delta);

        return Promise.resolve();
      },
      [ctxRef, canvasRef, workerRef]
    )
  );
}
