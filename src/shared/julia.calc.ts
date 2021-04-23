import { IJuliaOptions, IJuliaParams } from "./julia.types";

export function jCalculateArray(options: IJuliaOptions) {
  const { height, width, creal, cimag, factor } = options;
  const f = Math.floor(factor || 1);
  const w = width / f;
  const h = height / f;

  const h4 = w / 4;
  const w4 = h / 4;

  const array: number[] = [];

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let cx = -2 + x / w4;
      let cy = -2 + y / h4;
      let i = 0;

      do {
        const xt = cx * cx - cy * cy + creal;
        cy = 2 * cx * cy + cimag;
        cx = xt;
        i++;
      } while (cx * cx + cy * cy < 4 && i < 25);

      array.push(i);
    }
  }

  return array;
}

export function jAnimate(frame: number): IJuliaParams {
  const creal = -0.8 + 0.6 * Math.sin(frame / (3.14 * 20));
  const cimag = 0.156 + 0.4 * Math.cos(frame / (3.14 * 40));
  return { creal, cimag };
}

export function jCreateColorsPallete() {
  const pallette: string[] = [];

  for (
    let x = 0;
    x < 9;
    x++ // this loop populates the color pallette array
  ) {
    let color = (31 * x).toString(16); // convert the number to hex
    if (color.length === 1) {
      color = "0" + color; // add a zero in front if only one hex digit
    }
    pallette[x] = "#" + color + color + "ff"; // colors 0-8: the Red and Green components change, Blue=FF
    pallette[x + 8] = "#00ff" + color; // colors 8-16: the Blue component changes, Red and Green=FF
    pallette[17 + x] = "#" + color + "0000"; // colors 17-25: the Red component changes, Green and Blue=0
  }

  return pallette;
}
