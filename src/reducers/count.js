const countReducerDefault = { rightAnswer: 0, wrongAnswer: 0 };

export default (state = countReducerDefault, action) => {
  switch (action.type) {
    case 'ADD_SCORE':
      return {
        ...state,
        ...action.count
      }
    case 'INCREMENT_SCORE':
      return {
        rightAnswer: state.rightAnswer + action.incrementBy,
        wrongAnswer: state.wrongAnswer + action.incrementBy
      };
    case 'SET':
      return action.count
  
    /*case 'RESET':
    return {
      rightAnswer: 0,
      wrongAnswer: 0
    };*/
    default: 
      return state;
  }
};
