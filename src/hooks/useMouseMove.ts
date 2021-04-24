import { MutableRefObject, useEffect, useRef } from "react";

export function useMouseMove(
  canvasRef: MutableRefObject<HTMLCanvasElement | null>,
  hitTest: (points: { x: number; y: number; ex: number; ey: number }) => boolean
) {
  const xRef = useRef(50);
  const yRef = useRef(50);

  const capturedRef = useRef(false);

  useEffect(() => {
    const onmousedown = (ev: MouseEvent) => {
      const x = xRef.current;
      const y = yRef.current;
      const ex = ev.offsetX || 0;
      const ey = ev.offsetY || 0;

      const hit = hitTest({ x, y, ex, ey });

      if (hit) {
        capturedRef.current = true;
        document.body.style.cursor = "grabbing";
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
      document.body.style.cursor = "grab";
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

  return { xRef, yRef };
}
