import { MutableRefObject, useRef } from "react";
import { useRequestAnimationFrame } from "../hooks/useTime";
import { jAnimate, jCalculateArray } from "../shared/julia.calc";
import { IJuliaOptions, IJuliaResolution } from "../shared/julia.types";
import { fps } from "./paint";

export function usePaintOnMain(
  canvasRef: MutableRefObject<HTMLCanvasElement | null>,
  ctxRef: MutableRefObject<CanvasRenderingContext2D | null>,
  factor?: number
) {
  const frame = useRef(0);
  const factorRef = useRef(factor || 0);
  factorRef.current = factor || 0;

  useRequestAnimationFrame(async (delta) => {
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
    const values = jCalculateArray(options);

    const img = new ImageData(values, resolution.width, resolution.height);
    ctx.putImageData(img, 0, 0);

    fps(true, delta);

    return Promise.resolve();
  });
}
