const {
	re
} = require("semver");

const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	let mainArray = expr.replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ').split(' ');
	mainArray.forEach((item, i) => {
		let temp = '';
		for (let j = 0; j < item.length; j += 10) {
			temp += `${item.substring(j, j+10)} `;
		}
		mainArray[i] = temp.trim().split(' ');
		mainArray[i].forEach((item, k) => {
			let tempTwo = '';
			for (let j = 0; j < item.length; j += 2) {
				switch (item.substring(j, j + 2)) {
					case '10':
						tempTwo += '.';
						break;
					case '11':
						tempTwo += '-';
						break;
					default:
						tempTwo += '';
				}
			}
			mainArray[i][k] = tempTwo;
		});
		mainArray[i].forEach((item, k) => {
			let word = '';
			for (let key in MORSE_TABLE) {
				if (key === item) {
					word += MORSE_TABLE[key];
				}
			}
			mainArray[i][k] = word;
		});
		mainArray[i] = mainArray[i].join('');
	});
	return mainArray.join(' ');
}

module.exports = {
	decode
};