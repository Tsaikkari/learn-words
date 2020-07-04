import database from '../firebase/firebase';

// ADD_SCORE
export const addScore = (score) => ({
  type: 'ADD_SCORE',
  score
});

export const startAddScore = (scoreData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      rightAnswer = 0,
      wrongAnswer = 0
    } = scoreData;
    const score = {
      rightAnswer,
      wrongAnswer
    }
    database.ref(`users/${uid}/count`).set(score).then(() => {
      dispatch(addScore({
        ...score
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

export const startIncrementRightScore = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/count`).on('value', (snapshot) => {
      let score = snapshot.val();
      let rightAnswer = score.rightAnswer
     dispatch(incrementScore(rightAnswer));
     console.log(rightAnswer)
    });
  }
};

export const startIncrementWrongScore = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/count`).on('value', (snapshot) => {
      let score = snapshot.val();
      let wrongAnswer = score.wrongAnswer;
      dispatch(incrementScore(wrongAnswer));
    });
  }
};
// TODO: Fix this
// SET
export const setCount = (count) => ({
  type: 'SET',
  count
});

export const startSetCount = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/count`).once('value').then((snapshot) => {
      const val = snapshot.val();
      const count = {
        rightAnswer: val.rightAnswer,
        wrongAnswer: val.wrongAnswer
      }
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
