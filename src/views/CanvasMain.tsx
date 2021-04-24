import { FC, memo } from "react";
import { useCanvas } from "../hooks/useCanvas";
import { useCircle } from "../hooks/useCircle";
import { K_Resolution } from "./paint";
import { usePaintOnMain } from "./usePaintOnMain";

export const CanvasMain: FC<{ factor: number }> = memo((props) => {
  const { canvasRef, ctxRef } = useCanvas();
  const circle = useCircle(canvasRef);

  usePaintOnMain(canvasRef, ctxRef, circle, props.factor);

  return (
    <canvas ref={canvasRef} width={K_Resolution} height={K_Resolution}></canvas>
  );
});
