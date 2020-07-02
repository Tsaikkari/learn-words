const countReducerDefault = { rightAnswer: 0, wrongAnswer: 0 };
let rightAnswer = countReducerDefault.rightAnswer;
let wrongAnswer = countReducerDefault.wrongAnswer;
export default (state = countReducerDefault, action) => {
  switch (action.type) {
    case 'INCREMENT':
      if (rightAnswer) {
        return {
          rightAnswer: state.rightAnswer + action.incrementBy
        } 
      } else if (wrongAnswer) {
        return {
          wrongAnswer: state.wrongAnswer + action.incrementBy
        }
      }
      /*return {
        rightAnswer: state.rightAnswer + action.incrementBy,
        wrongAnswer: state.wrongAnswer + action.incrementBy
      };*/
    case 'SET':
      return action.count;
    case 'RESET':
    return {
      rightAnswer: 0,
      wrongAnswer: 0
    };
    default: 
      return state;
  }
};
