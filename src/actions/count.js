import database from '../firebase/firebase';

// INCREMENT_SCORE
export const incrementScore = ( { incrementBy = 1 } = {}) => ({
  type: 'INCREMENT_SCORE',
  incrementBy
});

// TODO: Fix these
export const startIncrementRightScore = ({rightAnswer = 0}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/count`).set({rightAnswer}).then(() => {
      dispatch(incrementScore({
        ...rightAnswer
     }));
     console.log(rightAnswer);
    });
  }
};

// SET
export const setCount = (count = {rightAnswer: 0}, {rightAnswer = 0} = count) => ({
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

// RESET
/*export const resetCount = () => ({
  type: 'RESET'
});*/