import { FC, memo } from "react";
import { useCanvas } from "../hooks/useCanvas";
import { useCircle } from "../hooks/useCircle";
import { K_Resolution } from "./paint";
import { usePaintCircle } from "./usePaintCircle";

export const CanvasCircle: FC<{}> = memo((props) => {
  const { canvasRef, ctxRef } = useCanvas();
  const circle = useCircle(canvasRef);

  usePaintCircle(canvasRef, ctxRef, circle, 1);

  return (
    <canvas
      ref={canvasRef}
      width={K_Resolution}
      height={K_Resolution}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
      }}
    ></canvas>
  );
});
