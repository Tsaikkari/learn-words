import database from '../firebase/firebase';

// INCREMENT_TOTAL_SCORE
export const incrementTotalScore = ( { incrementBy = 1 } = {}) => ({
  type: 'INCREMENT_TOTAL_SCORE',
  incrementBy
});

export const startIncrementTotalScore = ({ totalScore = 0 }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/totalCount`).set({ totalScore }).then(() => {
      dispatch(incrementTotalScore({
        ...totalScore
     }));
    });
  }
};

// RESET_TOTAL_COUNT
export const resetTotalCount = (totalCount = { totalScore: 0 }, { totalScore = 0 } = totalCount) => ({
  type: 'RESET_TOTAL_COUNT',
  totalCount,
  totalScore
});

export const startResetTotalCount = (totalCount = { totalScore: 0 }, { totalScore = 0 } = totalCount) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/totalCount`).set({ totalcount: totalScore }).then(() => {
      dispatch(resetTotalCount({
        totalCount,
        totalScore
     }));
    });
  }
};

// SET_TOTAL_COUNT
export const setTotalCount = (totalCount = { totalScore: 0 }, { totalScore = 0 } = totalCount) => ({
  type: 'SET_TOTAL_COUNT',
  totalCount,
  totalScore
});

export const startSetTotalCount = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/totalCount`).once('value').then((snapshot) => {
      const totalCount = snapshot.val();
      const totalScore = totalCount.totalScore;
      dispatch(setTotalCount({
        totalScore
      }));
    }).catch((e) => {
      console.log('Error fetching data', e);
    });
  };
}

