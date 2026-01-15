import * as fs from "fs";

const input = fs.readFileSync("./input.txt", "utf-8");

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
  const s1 = l * w;
  const s2 = h * w;
  const s3 = l * h;
  const lowest = Math.min(s1, s2, s3);
  const total = 2 * s1 + 2 * s2 + 2 * s3 + lowest;
  sum += total;
}

console.log(sum);
