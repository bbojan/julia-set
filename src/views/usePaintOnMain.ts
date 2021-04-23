import { MutableRefObject, useMemo, useRef } from "react";
import {
  jAnimate,
  jCalculateArray,
  jCreateColorsPallete,
} from "../shared/julia.calc";
import { IJuliaOptions, IJuliaResolution } from "../shared/julia.types";
import { paint } from "./paint";
import { useRAF } from "./useCanvas";

export function usePaintOnMain(
  canvasRef: MutableRefObject<HTMLCanvasElement | null>,
  ctxRef: MutableRefObject<CanvasRenderingContext2D | null>
) {
  const pallete = useMemo(jCreateColorsPallete, []);
  const frame = useRef(0);

  useRAF((delta) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = ctxRef.current;
    if (!ctx) return;

    const resolution: IJuliaResolution = {
      width: canvas?.width || 960,
      height: canvas?.height || 540,
    };

    frame.current = frame.current + 1;
    const params = jAnimate(frame.current);

    const options: IJuliaOptions = { ...resolution, ...params };
    const values = jCalculateArray(options);

    paint(ctx, options, values, pallete);
    return 1000 / 20; // FPS // pause in ms
  });
}
