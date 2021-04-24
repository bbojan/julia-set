import { ICircle } from "../hooks/useCircle";

export const K_Resolution = 640;

export function paintCircle(ctx: CanvasRenderingContext2D, circle: ICircle) {
  const { xRef, yRef, radius } = circle;
  const x = xRef.current;
  const y = yRef.current;

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
}

export function fps(fractal: boolean, delta: number) {
  const parts = document.title.split(",");
  if (fractal) {
    const parts = document.title.split(",");
    document.title = `${parts[0] || ""},  FRACTAL ${(1000 / delta).toFixed(
      1
    )} FPS`;
  } else {
    document.title = `UI ${(1000 / delta).toFixed(1)} FPS  ,${parts[1] || ""}`;
  }
}
