// three vowels
// one repeated letter
// not one of `ab` `cd` `pq` `xy`

import * as fs from "node:fs";

const vowelSet: Set<string> = new Set<string>();
vowelSet.add("a");
vowelSet.add("e");
vowelSet.add("i");
vowelSet.add("o");
vowelSet.add("u");

function isNice(input: string): boolean {
  if (
    input.includes("ab") ||
    input.includes("cd") ||
    input.includes("pq") ||
    input.includes("xy")
  ) {
    return false;
  }
  let vowels = 0;
  let repeated = false;
  let prev = "";
  for (const char of input) {
    if (vowelSet.has(char)) {
      vowels++;
    }
    if (prev === char) {
      repeated = true;
    }
    prev = char;
  }
  return vowels >= 3 && repeated;
}

const input = fs.readFileSync("./input.txt", "utf-8");

const lines = input.split("\n");

let niceCount = 0;

for (const line of lines) {
  const processed = line.trim();
  if (isNice(processed)) {
    niceCount++;
  }
}

console.log(niceCount);
