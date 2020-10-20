import { Point } from "./point";

const insideRange = (x: number, min: number, max: number): Boolean =>
  x > min && x < max;

const clipBetween = (x: number, min: number, max: number) => {
  return Math.max(Math.min(x, max), min);
};

const distance = (p1: Point, p2: Point) => {
  return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
};

export { insideRange, clipBetween, distance };
