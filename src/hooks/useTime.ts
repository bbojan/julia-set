import { useEffect, useRef } from "react";

export const delayed = (timeout: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(timeout);
    }, timeout);
  });

export function useInterval(timeout: number, callback: () => void) {
  useEffect(() => {
    const id = setInterval(callback, timeout);
    return () => {
      clearInterval(id);
    };
  }, []);
}

export function useRequestAnimationFrame(
  animate: (deltaTime: number, time: number) => Promise<unknown>
) {
  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);

  useEffect(() => {
    const callback: FrameRequestCallback = async (time) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current;
        await animate(deltaTime, time);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(callback);
    };

    requestRef.current = requestAnimationFrame(callback);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
}

export function formatedTime() {
  const d = new Date();
  const time = `${d.getHours()}:${d.getMinutes()} | ${d.getSeconds()},${d.getMilliseconds()}`;
  return time;
}
