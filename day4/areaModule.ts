

export const PI: number = 3.1416;

export function areaCircle(radius: number): number {
  return PI * radius * radius;
}

export function areaRectangle(length: number, width: number): number {
  return length * width;
}

export function areaCylinder(radius: number, height: number): number {
  return 2 * PI * radius * (radius + height);
}
