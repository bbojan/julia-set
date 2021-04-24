import { MutableRefObject, useMemo, useRef } from "react";
import { ICircle } from "../hooks/useCircle";
import { delayed, useRequestAnimationFrame } from "../hooks/useTime";
import {
  jAnimate,
  jCalculateArray,
  jCreateColorsPallete,
} from "../shared/julia.calc";
import { IJuliaOptions, IJuliaResolution } from "../shared/julia.types";
import { paint, paintCircle } from "./paint";

export function usePaintOnMain(
  canvasRef: MutableRefObject<HTMLCanvasElement | null>,
  ctxRef: MutableRefObject<CanvasRenderingContext2D | null>,
  circle: ICircle,
  factor?: number
) {
  const pallete = useMemo(jCreateColorsPallete, []);
  const frame = useRef(0);
  const factorRef = useRef(factor || 4);
  factorRef.current = factor || 4;

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

    paint(ctx, options, values, pallete);

    paintCircle(ctx, circle);

    return await delayed(50); // pause in ms
  });
}
