function sumFibs(num) {
	//define function for new number in fibonacci sequence
	const sum = (arr, index) => arr[index] + arr[index - 1];
	//generate fibonacci sequence with last number <= num
	let arrFibs = [1, 1]; 
	for (let i = 1; sum(arrFibs, i) <= num; i++) {
		arrFibs.push(sum(arrFibs, i))
	}
	//sum of odd numbers
	return arrFibs.reduce((a, b) => b % 2 == 1 ? a + b : a)
}

console.log(sumFibs(13));