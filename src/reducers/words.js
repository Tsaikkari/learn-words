const wordsReducerDefaultState = []; // Default state stored into a variable

export default (state = wordsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_WORD':         // Action cases brought by action generators and handled by reduser
      return [
        ...state, 
        action.wordItem
      ];
    case 'REMOVE_WORD':
      return state.filter(({ id }) =>  id !== action.id);
    case 'EDIT_WORD':
      return state.map((wordItem) => {
        if (wordItem.id === action.id) {
          return {
            ...wordItem,
            ...action.updates
          }
        } else {
          return wordItem;
        }
      });
      case 'SET_WORDS':
        return action.words;
    default: 
      return state;
  }
};

 