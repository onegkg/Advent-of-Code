import * as fs from "node:fs";

// expected 1227775554
// const file = fs.readFileSync("./testInput.txt", "utf-8");
const file = fs.readFileSync("./input.txt", "utf-8");
const ids = file.trim().split(",");

let sum = 0;

for (const id of ids) {
	const parts = id.trim().split("-");
	const start = Number(parts[0]);
	const end = Number(parts[1]);
	for (let i = start; i <= end; i++) {
		const string = i.toString();
		const firstHalf = string.slice(0, string.length / 2);
		const secondHalf = string.slice(string.length / 2);
		if (firstHalf === secondHalf) {
			console.log(`found invalid id ${firstHalf} ${secondHalf}`);
			sum += i;
		}
	}
}

console.log(`sum: ${sum}`);
