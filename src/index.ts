import { drawBackground } from "./drawBackground";
import { clearCanvas } from "./clearCanvas";
import { drawPoint } from "./drawPoint";
import { drawLines } from "./drawLines";
import { randomPoint, movePoint } from "./point";

import {
  FRAMES_PER_SECOND,
  MAX_POINT_SPEED,
  MILLISECONDS_PER_SECOND,
  NUM_POINTS,
} from "./constants";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d");

let points = Array(NUM_POINTS)
  .fill(null)
  .map(() => randomPoint(canvas, MAX_POINT_SPEED));

const mainLoop = () => {
  clearCanvas(context, canvas);
  drawBackground(context, canvas);
  drawLines(points, context);
  points = points.map((point) => {
    drawPoint(point, context);
    return movePoint(point, MAX_POINT_SPEED, canvas);
  });
};

setInterval(mainLoop, FRAMES_PER_SECOND / MILLISECONDS_PER_SECOND);
