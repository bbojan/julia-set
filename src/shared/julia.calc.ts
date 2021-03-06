import glur from "glur";
import Sobel from "../external/Sobel";
import { IJuliaOptions, IJuliaParams } from "./julia.types";

export function jCalculateArray(options: IJuliaOptions) {
  const { height, width, creal, cimag, factor, edge } = options;
  const f = Math.floor(factor || 0);

  const w = width;
  const h = height;
  const h4 = w / 4;
  const w4 = h / 4;

  let array = new Uint8ClampedArray(w * h * 4);
  const pallete = jCreateColors();

  let j = 0;

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

      const colors = pallete[i];
      array[j + 0] = colors[0];
      array[j + 1] = colors[1];
      array[j + 2] = colors[2];
      array[j + 3] = colors[3];

      j += 4;
    }
  }

  glur(array, w, h, f);

  if (edge) {
    const bytes = Sobel(Sobel.FakeImageData(array, w, h));
    return bytes;
  } else {
    return array;
  }
}

export function jAnimate(frame: number): IJuliaParams {
  const creal = -0.8 + 0.6 * Math.sin(frame / (3.14 * 20));
  const cimag = 0.156 + 0.4 * Math.cos(frame / (3.14 * 40));
  return { creal, cimag };
}

export function jCreateColors() {
  const pallette: number[][] = [];

  for (
    let x = 0;
    x < 9;
    x++ // this loop populates the color pallette array
  ) {
    let color = 31 * x; // convert the number to hex
    pallette[x] = [color, color, 255, 255]; // "#" + color + color + "ff"; // colors 0-8: the Red and Green components change, Blue=FF
    pallette[x + 8] = [0, 255, color, 255]; // "#00ff" + color; // colors 8-16: the Blue component changes, Red and Green=FF
    pallette[17 + x] = [color, 0, 0, 255]; //  "#" + color + "0000"; // colors 17-25: the Red component changes, Green and Blue=0
  }

  return pallette;
}
