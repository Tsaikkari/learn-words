const countReducerDefaultState = { rightAnswer: 0, wrongAnswer: 0 } 

export default (state = countReducerDefaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count,
        rightAnswer: state.rightAnswer + action.incrementBy,
        wrongAnswer: state.wrongAnswer + action.incrementBy
      };
    case 'RESET':
      return {
        count: {},
        rightAnswer: 0,
        wrongAnswer: 0
      };
    case 'SET':
      return action.count;
    default: 
      return state;
  }
};

