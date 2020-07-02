import database from '../firebase/firebase';

// INCREMENT
export const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

/*export const startIncrementCount = ({ rightAnswer = 0, wrongAnswer = 0 } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    if (rightAnswer) {
      return database.ref(`users/${uid}/count/rightAnswer`).set(rightAnswer).then((snapshot) => {
        console.log(snapshot)
        
        //let rightAnswer = snapshot.key;
        snapshot.forEach((rightAnswer) = {
          rightAnswer: {
            ...snapshot('rightAnswer').val()
          }
        });
        dispatch(incrementCount(rightAnswer));
      }).catch((e) => {
        console.log("Error when setting data", e)
      });
    } else if (wrongAnswer) {
      return database.ref(`users/${uid}/count/wrongAnswer`).set(wrongAnswer).then((snapshot) => {
        let wrongAnswer = snapshot.key;
        snapshot.forEach((wrongAnswer) = {
          wrongAnswer: {
            ...snapshot('wrongAnswer').val()
          }
        });
        dispatch(incrementCount(wrongAnswer));
      }).catch((e) => {
        console.log("Error when setting data", e)
      });
    }
  };
};*/

// TODO: fix
export const startIncrementCount = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
      return database.ref(`users/${uid}/count`).set({
        rightAnswer: 0,
        wrongAnswer: 0
      }).then((snapshot) => {
        console.log(snapshot)
        const val = snapshot.val();
        val.rightAnswer = {
          ...snapshot('rightAnswer').val()
        };
        val.wrongAnswer = {
          ...snapshot('wrongAnswer').val()
        };
        const count = {
          rightAnswer: val.rightAnswer,
          wrongAnswer: val.wrongAnswer
        }
        dispatch(incrementCount(count));
      }).catch((e) => {
        console.log("Error when setting data", e)
      });
  }
};

// SET
export const setCount = (count) => ({
  type: 'SET',
  count
});

// TODO: Should increment only one score at the time and set 0 as default values
export const startSetCount = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/count`).once('value').then((snapshot) => {
      const count = {
        rightAnswer: snapshot.child('rightAnswer').val(),
        wrongAnswer: snapshot.child('wrongAnswer').val()
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