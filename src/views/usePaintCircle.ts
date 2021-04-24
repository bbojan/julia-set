import { MutableRefObject, useRef } from "react";
import { ICircle } from "../hooks/useCircle";
import { useRequestAnimationFrame } from "../hooks/useTime";
import { paintCircle } from "./paint";

export function usePaintCircle(
  canvasRef: MutableRefObject<HTMLCanvasElement | null>,
  ctxRef: MutableRefObject<CanvasRenderingContext2D | null>,
  circle: ICircle,
  factor?: number
) {
  const factorRef = useRef(factor || 4);
  factorRef.current = factor || 4;

  useRequestAnimationFrame(async (delta) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = ctxRef.current;
    if (!ctx) return;

    // alpha
    const w = canvasRef.current?.width || 1;
    const h = canvasRef.current?.height || 1;
    ctx.clearRect(0, 0, w, h);
    // alpha

    paintCircle(ctx, circle);

    return Promise.resolve();
  });
}
