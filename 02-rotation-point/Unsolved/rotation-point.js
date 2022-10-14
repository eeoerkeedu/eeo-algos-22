// Write a function that takes in an array of sorted strings and returns the index of its rotation point if it has one, else return -1

var rotationPoint = function (words) {
	let prevWord = "";
	let count = 0;
	for (let i = 0; i < words.length; i++) {
		console.log(prevWord, words[i]);
		if (words[i] < prevWord) {
			count = i;
			return count;
		}
		prevWord = words[i];
	}
	console.log(count);
	return -1;
};
