import { MutableRefObject, useRef } from "react";
import { useRequestAnimationFrame } from "../hooks/useTime";
import { useWorker } from "../hooks/useWorker";
import { jAnimate } from "../shared/julia.calc";
import { IJuliaOptions, IJuliaResolution } from "../shared/julia.types";

export function usePaintOnWorker(
  canvasRef: MutableRefObject<HTMLCanvasElement | null>,
  ctxRef: MutableRefObject<CanvasRenderingContext2D | null>,
  factor?: number
) {
  const frame = useRef(0);
  const factorRef = useRef(factor || 1);
  factorRef.current = factor || 1;

  const workerRef = useWorker();

  const isCalculatingRef = useRef(false);
  const arrayRef = useRef<Uint8ClampedArray | null>(null);

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
      arrayRef.current = await worker.calculate(options);
      isCalculatingRef.current = false;
    }

    const array = arrayRef.current;
    if (array) {
      const img = new ImageData(array, resolution.width, resolution.height);
      ctx.putImageData(img, 0, 0);
    }

    document.title = `${(1000 / delta).toFixed(2)} FPS`;

    return Promise.resolve();
  });
}
