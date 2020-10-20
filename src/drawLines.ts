import { Point } from "./point";
import { distance } from "./utils";
import {
  LINE_WIDTH_EXPONENT,
  LINE_WIDTH_MULTIPLIER,
  LINE_COLOR,
  MAX_LINE_WIDTH,
  MIN_LINE_WIDTH,
} from "./constants";
const drawLines = (points: Array<Point>, context: CanvasRenderingContext2D) => {
  for (let p1 of points) {
    for (let p2 of points) {
      const dist = distance(p1, p2);
      const lineWidth = Math.min(
        LINE_WIDTH_MULTIPLIER / dist ** LINE_WIDTH_EXPONENT,
        MAX_LINE_WIDTH
      );
      if (lineWidth > MIN_LINE_WIDTH) {
        context.lineWidth = lineWidth;
        context.beginPath();
        context.moveTo(p1.x, p1.y);
        context.lineTo(p2.x, p2.y);
        context.strokeStyle = LINE_COLOR;
        context.stroke();
      }
    }
  }
};

export { drawLines };
