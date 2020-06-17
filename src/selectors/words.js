export default (words, { text, sortBy }) => {
	return words.filter((wordItem) => {
		const textMatch = wordItem.word.toLowerCase().includes(text.toLowerCase());
		const translationMatch = wordItem.translation.toLowerCase().includes(text.toLowerCase());
		if (sortBy === 'word') {
			return textMatch;
		} else if (sortBy === 'translation') {
			return translationMatch;
		}
	});
};