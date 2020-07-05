const countReducerDefault = { rightAnswer: 0 };

export default (state = countReducerDefault, action) => {
  switch (action.type) {
    case 'INCREMENT_SCORE':
      return {
        rightAnswer: state.rightAnswer + action.incrementBy
      };
    case 'SET':
      return {
        count: action.count,
        rightAnswer: action.rightAnswer
      };
      case 'RESET':
      return {
        count: 0,
        rightAnswer
      };
    default: 
      return state;
  }
};
