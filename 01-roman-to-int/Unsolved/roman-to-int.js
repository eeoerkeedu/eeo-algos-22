// Write a function that takes in a Roman Numeral string and returns its integer form

var romanToInt = function (str) {
	let numerals = str.split("");
	console.log(numerals);
	const romeNums = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

	let total = 0;
	let prevchar = numerals[1];

	numerals.map((chars) => {
		console.log(prevchar);
		// console.log(chars);
		let checkChar = romeNums[chars];
		if (checkChar > prevchar) {
			console.log("subtract");
			total = total - prevchar * 2;
		}
		console.log(checkChar);
		total = total + checkChar;
		prevchar = romeNums[chars];
	});

	console.log(total);
	return total;
};
