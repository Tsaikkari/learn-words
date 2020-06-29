/*import database from '../firebase/firebase';

// INCREMENT
export const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

export const startIncrementCount = (countData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      rightCount = 0,
      wrongCount = 0
    } = countData;
    const count = { rightCount, wrongCount }
    return database.ref(`users/${uid}/count`).update({count}).then(() => {
      dispatch(incrementCount({count}))
    }).catch((error) => {
      console.log(error)
    });
  }
}

// RESET
/*export const resetCount = () => ({
  type: 'RESET'
});*/