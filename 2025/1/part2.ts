import * as fs from "node:fs";

const file = fs.readFileSync("./input.txt", "utf-8");
const lines = file.trim().split("\n");
let pos = 50;
let sum = 0;
for (const line of lines) {
	console.log(`line: ${line}, pos: ${pos}`);
	const { position, zeroes } = rotate(line, pos);
	sum += zeroes;
	pos = position;
	console.log(`post rotation: pos = ${pos}, sum = ${sum} \n`);
}
if (pos === 0) {
	console.log("found zero post rotation");
	sum++;
}
console.log(sum, pos);

function rotate(line: string, position: number) {
	let number = Number(line.slice(1));
	let zeroes = 0;
	// if (position === 0) {
	// 	console.log("decrement zeroes");
	// 	zeroes--;
	// }
	if (line.startsWith("R")) {
		while (number > 0) {
			if (position === 99) {
				position = 0;
				zeroes++;
				console.log("passed zero");
			} else {
				position++;
			}
			number--;
		}
	} else {
		while (number > 0) {
			if (position === 1) {
				position--;
				zeroes++;
				console.log("passed zero");
			} else if (position === 0) {
				position = 99;
			} else {
				position--;
			}
			number--;
		}
	}
	return {
		position: position,
		zeroes: Math.max(zeroes, 0),
	};
}
