import { IJuliaResolution } from "../shared/julia.types";

export function paint(
  ctx: CanvasRenderingContext2D,
  resolution: IJuliaResolution,
  values: number[],
  pallette: string[]
) {
  const { height, width, factor } = resolution;

  const f = Math.floor(factor || 1);
  const w = width / f;
  const h = height / f;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = y * h + x;
      const index = values[i] || 0;
      const color = pallette[index];

      ctx.beginPath();
      ctx.rect(x * f, y * f, f, f);
      ctx.fillStyle = color;
      ctx.fill();
    }
  }
}
