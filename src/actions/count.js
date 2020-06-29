import database from '../firebase/firebase';

// INCREMENT
export const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

export const startIncrementCount = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const count = {
      count: 0
    };
    return database.ref(`users/${uid}/count`).update({count}).then(() => {
      dispatch(incrementCount(count));
    });
  };
}

// RESET
/*export const resetCount = () => ({
  type: 'RESET'
});*/