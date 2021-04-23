import { FC } from "react";
import { useCanvas } from "./useCanvas";
import { useCircle } from "./useCircle";
import { usePaintOnWorker } from "./usePaintOnWorker";

const K_Resolution = 640;

export const Canvas: FC<{}> = () => {
  const { canvasRef, ctxRef } = useCanvas();
  const circle = useCircle(canvasRef);

  // usePaintOnMain(canvasRef, ctxRef, circle, 1);
  usePaintOnWorker(canvasRef, ctxRef, circle, 1);

  return (
    <canvas ref={canvasRef} width={K_Resolution} height={K_Resolution}></canvas>
  );
};
