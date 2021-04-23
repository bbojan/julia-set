import { MutableRefObject, useEffect, useRef } from "react";

export function useCircle(
  canvasRef: MutableRefObject<HTMLCanvasElement | null>
): ICircle {
  const xRef = useRef(50);
  const yRef = useRef(50);

  const radius = 40;

  const capturedRef = useRef(false);

  useEffect(() => {
    const onmousedown = (ev: MouseEvent) => {
      const x = xRef.current;
      const y = yRef.current;
      const ex = ev.offsetX || 0;
      const ey = ev.offsetY || 0;
      const distance = Math.sqrt((x - ex) * (x - ex) + (y - ey) * (y - ey));

      if (distance < radius) {
        capturedRef.current = true;
      }
    };
    const onmousemove = (ev: MouseEvent) => {
      if (capturedRef.current) {
        xRef.current = ev.pageX;
        yRef.current = ev.pageY;
      }
    };
    const onmouseup = (ev: MouseEvent) => {
      capturedRef.current = false;
    };

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.onmousedown = onmousedown;
      window.onmousemove = onmousemove;
      window.onmouseup = onmouseup;
    }

    return () => {
      if (canvas) {
        canvas.onmousedown = null;
        window.onmousemove = null;
        window.onmouseup = null;
      }
    };
  }, []);

  return { xRef, yRef, radius };
}

export interface ICircle {
  xRef: MutableRefObject<number>;
  yRef: MutableRefObject<number>;
  radius: number;
}
