function sumFibs(num) {
	let result = 0;
	let previous = 0;
	let current = 1;
	while (current <= num) {
		if (current % 2 == 1) {
			result += current;
		}
		let sum = previous + current
		previous = current;
		current = sum;
	}
	return result
}

console.log(sumFibs(4));