import * as fs from "node:fs";

// const file = fs.readFileSync("./testInput.txt", "utf-8");
const file = fs.readFileSync("./input.txt", "utf-8");

const banks = file.trim().split("\n");

let sum = 0;

for (const bank of banks) {
	const joltages = bank.trim().split("");
	let jolt1 = -1;
	let joltIdx = -1;
	let jolt2 = -1;
	for (let i = 0; i < joltages.length - 1; i++) {
		const joltNum = Number(joltages[i]);
		if (jolt1 < joltNum) {
			jolt1 = joltNum;
			joltIdx = i;
		}
	}
	for (let i = joltIdx + 1; i < joltages.length; i++) {
		const joltNum = Number(joltages[i]);
		jolt2 = Math.max(joltNum, jolt2);
	}
	const outputStr = jolt1.toString() + jolt2.toString();
	const output = Number(outputStr);
	console.log(joltages);
	console.log(output);
	sum += output;
}

console.log(sum);
