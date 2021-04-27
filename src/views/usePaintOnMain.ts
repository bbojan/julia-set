import { MutableRefObject, useCallback, useRef } from "react";
import { useRequestAnimationFrame } from "../hooks/useTime";
import { jAnimate, jCalculateArray } from "../shared/julia.calc";
import { IJuliaOptions, IJuliaResolution } from "../shared/julia.types";
import { fps } from "./paint";

export function usePaintOnMain(
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

  useRequestAnimationFrame(
    useCallback(
      async (delta) => {
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
        const values = jCalculateArray(options);

        const img = new ImageData(values, resolution.width, resolution.height);
        ctx.putImageData(img, 0, 0);

        fps(true, delta);

        return Promise.resolve();
      },
      [ctxRef, canvasRef]
    )
  );
}
