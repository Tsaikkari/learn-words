// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});
  
// SORT_BY_WORD
export const sortByWord = () => ({
	type: 'SORT_BY_WORD'
});

// SORT_BY_TRANSLATION
export const sortByTranslation = () => ({
	type: 'SORT_BY_TRANSLATION'
});