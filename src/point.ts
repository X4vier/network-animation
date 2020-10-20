import { clipBetween, insideRange } from "./utils";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const randomPoint = (canvas: HTMLCanvasElement, maxSpeed: number): Point => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  vx: (Math.random() - 0.5) * 2 * maxSpeed,
  vy: (Math.random() - 0.5) * 2 * maxSpeed,
});

const accelerate = (velocity: number, maxSpeed: number): number =>
  clipBetween(velocity + 0.01 * (Math.random() - 0.5), -1 * maxSpeed, maxSpeed);

const movePoint = (
  { x, y, vx, vy }: Point,
  maxSpeed: number,
  canvas: HTMLCanvasElement
): Point => {
  return {
    x: clipBetween(x + vx, 0, canvas.width),
    y: clipBetween(y + vy, 0, canvas.height),
    vx: insideRange(x + vx, 0, canvas.width)
      ? accelerate(vx, maxSpeed)
      : -1 * vx,
    vy: insideRange(y + vy, 0, canvas.height)
      ? accelerate(vy, maxSpeed)
      : -1 * vy,
  };
};

export { Point, randomPoint, movePoint };
