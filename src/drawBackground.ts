import { BACKGROUND_COLOR_1, BACKGROUND_COLOR_2 } from "./constants";

const drawBackground = (
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) => {
  var grd = context.createRadialGradient(
    0.5 * canvas.width,
    0.5 * canvas.height,
    0,
    0.5 * canvas.width,
    0.5 * canvas.height,
    0.5 * (canvas.width + canvas.height)
  );
  grd.addColorStop(0, BACKGROUND_COLOR_1);
  grd.addColorStop(1, BACKGROUND_COLOR_2);

  context.fillStyle = grd;
  context.fillRect(0, 0, canvas.width, canvas.height);
};

export { drawBackground };
