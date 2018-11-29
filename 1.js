function sumFibs(num) {
	//generate fibonacci <= num
	let arrFibs = [1, 1];
	for (let i = 1; arrFibs[i-1] + arrFibs[i] <= num; i++) {
		arrFibs.push(arrFibs[i-1] + arrFibs[i])
	}
	//sum of odd numbers
	return arrFibs.reduce((a, b) => b % 2 == 1 ? a + b : a)
}

console.log(sumFibs(13));