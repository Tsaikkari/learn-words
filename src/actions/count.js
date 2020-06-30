import database from '../firebase/firebase';

// INCREMENT
export const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

export const startIncrementRightCount = ({rightAnswer = 0 } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/count/rightAnswer`).set(rightAnswer).then(() => {
      dispatch(incrementCount(rightAnswer));
    });
  };
};

export const startIncrementWrongCount = (wrongAnswer = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/count/wrongAnswer`).set(wrongAnswer).then(() => {
      dispatch(incrementCount(wrongAnswer));
    });
  };
};

// RESET
/*export const resetCount = () => ({
  type: 'RESET'
});*/