import database from '../firebase/firebase';

// ADD_SCORE
export const addScore = (count) => ({
  type: 'ADD_SCORE',
  count
});

export const startAddScore = (scoreData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      rightAnswer = 0,
      wrongAnswer = 0
    } = scoreData;
    const count = {
      rightAnswer,
      wrongAnswer
    }
    database.ref(`users/${uid}/count`).set(count).then(() => {
      dispatch(addScore({
        ...count
      }));
    }).catch((e) => {
      console.log('Error fetching data', e);
    });;
  };
};

// INCREMENT_SCORE
export const incrementScore = ( { incrementBy = 1 } = {}) => ({
  type: 'INCREMENT_SCORE',
  incrementBy
});

// TODO: Fix these
export const startIncrementRightScore = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/count`).on('value', (snapshot) => {
      let count = snapshot.val();
      const { rightAnswer, wrongAnswer } = count;
     dispatch(incrementScore({
       rightAnswer,
       ...wrongAnswer
      }));
     console.log(rightAnswer);
    });
  }
};

export const startIncrementWrongScore = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/count`).on('value', (snapshot) => {
      let count = snapshot.val();
      const { rightAnswer, wrongAnswer } = count;
      dispatch(incrementScore({
        ...rightAnswer,
        wrongAnswer
      }));
      console.log(wrongAnswer);
    });
  }
};

// SET
export const setCount = (count) => ({
  type: 'SET',
  count
});

export const startSetCount = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/count`).once('value').then((snapshot) => {
      const count = snapshot.val();
      dispatch(setCount(count));
      console.log(count)
    }).catch((e) => {
      console.log('Error fetching data', e);
    });
  };
}

// RESET
/*export const resetCount = () => ({
  type: 'RESET'
});*/
