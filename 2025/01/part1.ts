// accidentally overwrote with part2, did my best to fix it, but it might be slightly wrong

import * as fs from "node:fs";

const file = fs.readFileSync("./input.txt", "utf-8");
const lines = file.trim().split("\n");
let pos = 50;
let zeroes = 0;
for (const line of lines) {
	pos = rotate(line, pos);
	if (pos === 0) {
		zeroes++;
	}
}
console.log(zeroes);

function rotate(line: string, position: number) {
	const number = line.slice(1);
	if (line.startsWith("R")) {
		position += Number(number);
	}
	if (line.startsWith("L")) {
		position -= Number(number);
	}
	return fixNum(position);
}

function fixNum(num: number) {
	let newNum = num;
	if (zeroes === undefined) {
		zeroes = 0;
	}
	if (num >= 0 && num <= 99) {
		return num;
	} else if (num <= 0) {
		newNum += 100;
	} else {
		newNum -= 100;
	}
	return fixNum(newNum);
}
