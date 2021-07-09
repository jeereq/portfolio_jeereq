const replaceAllWord = (keyWord, dataToVerify) => {
	return dataToVerify.map((element) => {
		return replaceWord(element.name, keyWord);
	});
};
const replaceWord = (word, keyWord) => {
	let newWord = "";
	keyWord.forEach((element) => {
		if (word.replace(element, `<span>${element}</span>`) != word) {
			newWord = word.replace(element, `<span>${element}</span>`);
			word = newWord;
		}
	});
	return newWord;
};

export { replaceAllWord };
