import { Point } from "./point";
import { POINT_COLOR, POINT_RADIUS } from "./constants";

const drawPoint = (point: Point, context: CanvasRenderingContext2D) => {
  context.fillStyle = POINT_COLOR;
  context.beginPath();
  context.arc(point.x, point.y, POINT_RADIUS, 0, 2 * Math.PI);
  context.fill();
};

export { drawPoint };
