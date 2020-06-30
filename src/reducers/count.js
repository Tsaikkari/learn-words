export default (state = { rightAnswer: 0, wrongAnswer: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        rightAnswer: state.rightAnswer + action.incrementBy,
        wrongAnswer: state.wrongAnswer + action.incrementBy
      };
    case 'RESET':
      return {
        rightAnswer: 0,
        wrongAnswer: 0
      };
    default: 
      return state;
  }
};