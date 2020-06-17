const filtersReducerDefaultState = {
    text: '',
    sortBy: 'word',
  };
  
export default (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			};
		case 'SORT_BY_WORD':
			return {
				...state,
				sortBy: 'word'
			};
		case 'SORT_BY_TRANSLATION':
			return {
				...state,
				sortBy: 'translation'
			};
		default: 
			return state;
	}
};