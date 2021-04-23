import { IJuliaResolution } from "../shared/julia.types";

export function paint(
  ctx: CanvasRenderingContext2D,
  resolution: IJuliaResolution,
  values: number[],
  pallette: string[]
) {
  const { height, width } = resolution;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = y * height + x;
      const index = values[i] || 0;
      const color = pallette[index];

      ctx.beginPath();
      ctx.rect(x, y, 1, 1);
      ctx.fillStyle = color;
      ctx.fill();
    }
  }
}
