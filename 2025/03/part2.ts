import * as fs from "node:fs";

const file = fs.readFileSync("./testInput.txt", "utf-8");
// const file = fs.readFileSync("./input.txt", "utf-8");

const banks = file.trim().split("\n");

let sum = BigInt(0);

for (const bank of banks) {
	console.log(bank);
	let curr = bank;
	for (let i = 1; i < 10; i++) {
		const strI = String(i);
		while (curr.length > 12 && curr.includes(strI)) {
			const idx = curr.indexOf(strI);
			curr = removeChar(idx, curr);
			// console.log(idx, curr, curr.length);
		}
	}
	console.log(curr, curr.length);
	const number = BigInt(curr);
	sum += number;
	console.log(number);
	console.log(sum);
}

console.log(sum);

function removeChar(index: number, input: string): string {
	if (index < 0 || index > input.length) {
		throw Error("index out of bounds");
	}
	if (index === 0) {
		return input.slice(1);
	}
	const part1 = input.slice(0, index);
	const part2 = input.slice(index + 1);
	return part1 + part2;
}
