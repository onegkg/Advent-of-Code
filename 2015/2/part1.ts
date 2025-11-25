import * as fs from "fs";

// const input = fs.readFileSync("./input.txt", "utf-8");
const input = "2x3x4";

const lines = input.split("\n");

let sum = 0;

for (const line of lines) {
  if (line.length === 0) {
    break;
  }
  const dims = line.split("x");
  const h = parseInt(dims[0]);
  const w = parseInt(dims[1]);
  const l = parseInt(dims[2]);
  const p1 = l + l + w + w;
  const p2 = w + w + h + h;
  const p3 = l + l + h + h;
  const lowest = Math.min(p1, p2, p3);
  const volume = h * w * l;
  sum += lowest + volume;
}

console.log(sum);
