import { FC } from "react";
import { useCanvas } from "./useCanvas";
import { usePaintOnMain } from "./usePaintOnMain";

const K_Resolution = 640;

export const Canvas: FC<{}> = () => {
  const { canvasRef, ctxRef } = useCanvas();
  usePaintOnMain(canvasRef, ctxRef);

  return (
    <canvas ref={canvasRef} width={K_Resolution} height={K_Resolution}></canvas>
  );
};
