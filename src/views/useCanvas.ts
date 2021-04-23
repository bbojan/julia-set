import { useEffect, useRef } from "react";

export function useCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  useEffect(() => {
    if (canvasRef.current) {
      ctxRef.current = canvasRef.current.getContext("2d");
    }
  }, []);

  return { canvasRef, ctxRef };
}

export function useRAF(
  animate: (deltaTime: number, time: number) => number | undefined
) {
  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);

  useEffect(() => {
    const callback: FrameRequestCallback = async (time) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current;
        const pause = animate(deltaTime, time);
        pause && (await delayed(pause));
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(callback);
    };

    requestRef.current = requestAnimationFrame(callback);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
}

export const delayed = (timeout: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(timeout);
    }, timeout);
  });