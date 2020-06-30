import database from '../firebase/firebase';

// ADD_WORD
export const addWord = (wordItem) => ({
  type: 'ADD_WORD',
  wordItem
});

export const startAddWord = (wordData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      word = '', // Default arguments...
      translation = '',
      sentence = ''
    } = wordData;
    const wordItem = { word, translation, sentence };
    return database.ref(`users/${uid}/words`).push(wordItem).then((ref) => {
      dispatch(addWord({
        id: ref.key,
        ...wordItem
      }));
    });
  };
};
 
// REMOVE_WORD
export const removeWord = ({ id } = {}) => ({
  type: 'REMOVE_WORD',
  id
});

export const startRemoveWord = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/words/${id}`).remove().then(() => {
      dispatch(removeWord({ id }));
    });
  };
};
  
// EDIT_WORD
export const editWord = (id, updates) => ({
  type: 'EDIT_WORD',
  id,
  updates
});

export const startEditWord = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/words/${id}`).update(updates).then(() => {
      dispatch(editWord(id, updates));
    });
  };
};

// SET_WORDS
export const setWords = (words) => ({
  type: 'SET_WORDS',
  words
});

export const startSetWords = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/words`).once('value').then((snapshot) => {
      const words = [];
      snapshot.forEach((childSnapshot) => {
        words.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setWords(words));
    }).catch((e) => {
      console.log('Error fetching data', e);
    });
  };
};


  
  
  