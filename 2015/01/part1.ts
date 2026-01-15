import * as fs from "fs";

const content = fs.readFileSync("./input.txt", "utf-8");

let floor = 0;

for (const char of content) {
  if (char === "(") {
    floor++;
  }
  if (char === ")") {
    floor--;
  }
}

console.log(floor);
