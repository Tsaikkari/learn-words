const totalCountReducerDefault = { totalScore: 0 };

export default (state = totalCountReducerDefault, action) => {
  switch (action.type) {
    case 'INCREMENT_TOTAL_SCORE':
      return {
        totalScore: state.totalScore + action.incrementBy
      };
    case 'RESET_TOTAL_SCORE':
      return {
        totalCount: 0
      };
    case 'SET_TOTAL_COUNT':
      return {
        totalCount: action.totalCount,
        totalScore: action.totalScore
      }
    default: 
      return state;
  }
};
