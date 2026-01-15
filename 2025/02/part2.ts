import * as fs from "node:fs";

// expected 4174379265
// const file = fs.readFileSync("./testInput.txt", "utf-8");
const file = fs.readFileSync("./input.txt", "utf-8");
const ids = file.trim().split(",");

let sum = 0;

for (const id of ids) {
	const parts = id.trim().split("-");
	const start = Number(parts[0]);
	const end = Number(parts[1]);
	// console.log(`id = ${id}`);
	for (let i = start; i <= end; i++) {
		const str = i.toString();
		for (let j = 1; j <= str.length / 2; j++) {
			const parts = splitChars(str, j);
			// console.log(`	parts: ${parts}, j: ${j}`);
			if (new Set(parts).size === 1) {
				sum += i;
				// console.log(`	sum += ${i}`);
				break;
			}
		}
	}
}

console.log(`sum: ${sum}`);

function splitChars(str: string, size: number): string[] {
	const parts: string[] = [];
	for (let i = 0; i < str.length; i += size) {
		parts.push(str.slice(i, i + size));
	}
	return parts;
}
