import { FC, memo } from "react";
import { useCanvas } from "../hooks/useCanvas";
import { K_Resolution } from "./paint";
import { usePaintOnMain } from "./usePaintOnMain";

export const CanvasMain: FC<{ factor: number }> = memo((props) => {
  const { canvasRef, ctxRef } = useCanvas();
  usePaintOnMain(canvasRef, ctxRef, props.factor);

  return (
    <canvas ref={canvasRef} width={K_Resolution} height={K_Resolution}></canvas>
  );
});
