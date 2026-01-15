import * as fs from "node:fs";

type Polarity = "on" | "off" | "toggle";

type Coords = {
	start: [number, number];
	end: [number, number];
	polarity: Polarity;
};

function toggle(
	grid: boolean[][],
	start: [number, number],
	end: [number, number],
): void {
	for (let i = start[0]; i < end[0] + 1; i++) {
		for (let j = start[1]; j < end[1] + 1; j++) {
			grid[i][j] = !grid[i][j];
		}
	}
}

function off(
	grid: boolean[][],
	start: [number, number],
	end: [number, number],
): void {
	for (let i = start[0]; i < end[0] + 1; i++) {
		for (let j = start[1]; j < end[1] + 1; j++) {
			grid[i][j] = false;
		}
	}
}

function on(
	grid: boolean[][],
	start: [number, number],
	end: [number, number],
): void {
	for (let i = start[0]; i < end[0] + 1; i++) {
		for (let j = start[1]; j < end[1] + 1; j++) {
			grid[i][j] = true;
		}
	}
}

function countLights(grid: boolean[][]): number {
	let sum = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j]) {
				sum++;
			}
		}
	}
	return sum;
}

function nonToggleHelper(words: string[]) {
	const polarity: Polarity = words[1] as Polarity;
	const startStr = words[2];
	const endStr = words[4];
	return processString(startStr, endStr, polarity);
}

function toggleHelper(words: string[]): Coords {
	const startStr = words[1];
	const endStr = words[3];
	return processString(startStr, endStr, "toggle");
}

function processString(
	startStr: string,
	endStr: string,
	polarity: Polarity,
): Coords {
	const startArr = startStr.split(",");
	const endArr = endStr.split(",");
	const startTup: [number, number] = [
		Number(startArr[0]),
		Number(startArr[1]),
	];
	const endTup: [number, number] = [Number(endArr[0]), Number(endArr[1])];
	return {
		start: startTup,
		end: endTup,
		polarity: polarity,
	};
}

function main() {
	const grid: boolean[][] = Array(1000)
		.fill(null)
		.map(() => Array(1000).fill(false));
	const file = fs.readFileSync("./input.txt", "utf-8");
	const lines = file.trim().split("\n");
	for (const line of lines) {
		const words = line.trim().split(" ");
		if (words[0] === "toggle") {
			const coord = toggleHelper(words);
			toggle(grid, coord.start, coord.end);
		} else {
			const coord = nonToggleHelper(words);
			if (coord.polarity === "on") {
				on(grid, coord.start, coord.end);
			} else {
				off(grid, coord.start, coord.end);
			}
		}
	}
	console.log(countLights(grid));
}

main();
