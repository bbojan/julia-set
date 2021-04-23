import { MutableRefObject, useMemo, useRef } from "react";
import {
  jAnimate,
  jCalculateArray,
  jCreateColorsPallete,
} from "../shared/julia.calc";
import { IJuliaOptions, IJuliaResolution } from "../shared/julia.types";
import { paint } from "./paint";
import { delayed, useRAF } from "./useCanvas";
import { ICircle } from "./useCircle";

export function usePaintOnMain(
  canvasRef: MutableRefObject<HTMLCanvasElement | null>,
  ctxRef: MutableRefObject<CanvasRenderingContext2D | null>,
  circle: ICircle,
  factor?: number
) {
  const pallete = useMemo(jCreateColorsPallete, []);
  const frame = useRef(0);

  useRAF(async (delta) => {
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
    const values = jCalculateArray(options);

    paint(ctx, options, values, pallete);

    paintCircle(ctx, circle);

    return await delayed(50); // pause in ms
  });
}

export function paintCircle(ctx: CanvasRenderingContext2D, circle: ICircle) {
  const { xRef, yRef, radius } = circle;
  const x = xRef.current;
  const y = yRef.current;

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
}
