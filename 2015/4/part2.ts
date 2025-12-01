import { createHash } from "node:crypto";
import * as fs from "node:fs";

function md5(input: string): string {
  return createHash("md5").update(input, "utf8").digest("hex");
}

function findHash(input: string): [number, string] {
  let output = 100000;

  while (true) {
    const compound: string = input + output;
    const hash = md5(compound);
    if (hash.startsWith("000000")) {
      return [output, hash];
    }
    output++;
  }
}

const input = fs.readFileSync("./input.txt", "utf-8").trim();

console.log(findHash(input));
