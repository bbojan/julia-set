import { FC, memo } from "react";
import { useCanvas } from "../hooks/useCanvas";
import { K_Resolution } from "./paint";
import { usePaintOnWorker } from "./usePaintOnWorker";

export const CanvasWorker: FC<{ factor: number; edge: boolean }> = memo(
  (props) => {
    const { canvasRef, ctxRef } = useCanvas();
    usePaintOnWorker(canvasRef, ctxRef, props.factor, props.edge);

    return (
      <canvas
        ref={canvasRef}
        width={K_Resolution}
        height={K_Resolution}
      ></canvas>
    );
  }
);
