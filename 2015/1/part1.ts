import * as fs from "fs";

const content = fs.readFileSync("./input.txt", "utf-8");

let floor = 0;
let position = 1;

for (const char of content) {
  if (char === "(") {
    floor++;
  }
  if (char === ")") {
    floor--;
  }
  if (floor < 0) {
    break;
  }
  position++;
}

console.log(position);
