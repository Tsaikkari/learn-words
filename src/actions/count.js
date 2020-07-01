import database from '../firebase/firebase';

// INCREMENT
export const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

export const startIncrementCount = ({ rightAnswer = 0, wrongAnswer = 0 } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    if (rightAnswer) {
      return database.ref(`users/${uid}/count/rightAnswer`).set(rightAnswer).then(() => {
        dispatch(incrementCount(rightAnswer));
      });
    } else if (wrongAnswer) {
      return database.ref(`users/${uid}/count/wrongAnswer`).set(wrongAnswer).then(() => {
        dispatch(incrementCount(wrongAnswer));
      }).catch((e) => {
        console.log("Error when fetching data", e)
      });
    }
  };
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
      count = {rightAnswer: snapshot.child().val(), wrongAnswer: snapshot.child().val()}
      count = snapshot.val();
      dispatch(setCount(count));  
      console.log(count)
    }).catch((e) => {
        console.log('Error fetching data', e);
    });
  }
}

// RESET
/*export const resetCount = () => ({
  type: 'RESET'
});*/