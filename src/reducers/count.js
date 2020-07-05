const countReducerDefault = { rightAnswer: 0, wrongAnswer: 0 };

export default (state = countReducerDefault, action) => {
  switch (action.type) {
    case 'ADD_SCORE':
      return action.count
    case 'INCREMENT_SCORE':
      return {
        rightAnswer: state.rightAnswer + action.incrementBy
      };
    case 'SET':
      return {
        count: action.count,
        rightAnswer: action.rightAnswer
      }
  
    /*case 'RESET':
    return {
      rightAnswer: 0,
      wrongAnswer: 0
    };*/
    default: 
      return state;
  }
};
