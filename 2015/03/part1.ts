import * as fs from "node:fs";

const grid = new Map<string, boolean>();

const input = fs.readFileSync("./input.txt", "utf-8");

let x = 0;
let y = 0;

grid.set("0,0", true);

for (const char of input) {
  [x, y] = setloc(char, x, y);
}

console.log(grid.size);

function setloc(char: string, x: number, y: number): [number, number] {
  switch (char) {
    case "^":
      y++;
      break;
    case "v":
      y--;
      break;
    case ">":
      x++;
      break;
    case "<":
      x--;
      break;
    default:
      break;
  }
  if (!grid.has(`${x},${y}`)) {
    grid.set(`${x},${y}`, true);
  }
  return [x, y];
}
