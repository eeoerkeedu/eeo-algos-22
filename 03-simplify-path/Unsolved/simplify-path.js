// Write a function that takes in an absolute file path and simplifies it

var simplifyPath = function (path) {
	// let pathChars = path.split("..");
	// console.log(pathChars);
	// let pathLength = pathChars.length;
	// console.log(pathLength);
	// console.log(pathChars[pathLength - 1]);

	// if (pathChars[pathLength - 1] === "/") {
	// 	pathChars.pop();
	// }

	// let shortenedPath = pathChars.join("");
	// console.log(shortenedPath);

	// return shortenedPath;

	const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
	const cdUP = "..";
	const cdOVER = "./";
	pathArr = path.split("");
	let shortPath = "/";

	pathArr.map((char) => {
		console.log(char);
	});

	return shortPath;
};
