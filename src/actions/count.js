import database from '../firebase/firebase';

// INCREMENT_SCORE
export const incrementScore = ( { incrementBy = 1 } = {}) => ({
  type: 'INCREMENT_SCORE',
  incrementBy
});

export const startIncrementRightScore = ({ rightAnswer = 0 }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/count`).set({ rightAnswer }).then(() => {
      dispatch(incrementScore({
        ...rightAnswer
     }));
     console.log(rightAnswer);
    });
  }
};

// RESET
export const resetCount = () => ({
  type: 'RESET_COUNT',
});

export const startResetCount = (count = { rightAnswer: 0 }, { rightAnswer = 0 } = count) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/count`).set({ count }).then(() => {
      dispatch(resetCount({
        count,
        rightAnswer
     }));
     console.log(count)
    });
  }
};

// SET
export const setCount = (count = { rightAnswer: 0 }, { rightAnswer = 0 } = count) => ({
  type: 'SET',
  count,
  rightAnswer
});

export const startSetCount = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/count`).once('value').then((snapshot) => {
      const count = snapshot.val();
      const rightAnswer = count.rightAnswer;
      dispatch(setCount({
        rightAnswer
      }));
    }).catch((e) => {
      console.log('Error fetching data', e);
    });
  };
}



