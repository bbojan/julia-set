import { MutableRefObject } from "react";
import { useMouseMove } from "./useMouseMove";

export interface ICircle {
  xRef: MutableRefObject<number>;
  yRef: MutableRefObject<number>;
  radius: number;
}

export function useCircle(
  canvasRef: MutableRefObject<HTMLCanvasElement | null>
): ICircle {
  const radius = 40;

  const { xRef, yRef } = useMouseMove(canvasRef, ({ x, y, ex, ey }) => {
    const distance = Math.sqrt((x - ex) * (x - ex) + (y - ey) * (y - ey));
    return distance < radius;
  });

  return { xRef, yRef, radius };
}
