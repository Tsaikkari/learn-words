import { createStore, combineReducers } from 'redux';
import { v1 as uuid } from 'uuid';
import { database } from 'firebase';

const uid = getState().auth.uid;
const count = [];
database.ref(`users/${uid}/count`).push({
  rightAnswer: 0  
});

database.ref('count/-Kmshhisodhg').update({
  rightAnswer: 1
});

database.ref('count').push({
  rightAnswer: 0
});

const firebaseCount = {
  count: {
    aeürtuifn: {
      rightAnswer: 0
    },
    ürptnfset: {
      wrongAnswer: 0
    }
  }
};

const count = [
  {
  rightAnswer: 0
}, {
  wrongAnswer: 0
}];

database.ref('count').set(count)


// Action generators

// INCREMENT
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

// RESET
export const resetCount = () => ({
  type: 'RESET'
});

// SET
export const setCount = (count) => ({
  type: 'SET',
  count
});

// SORT_BY_RIGHT_ANSWER
const sortByRightAnswer = () => ({
  type: 'SORT_BY_RIGHT_ANSWER'
});

// SORT_BY_WRONG_ANSWER
const sortByWrongAnswer = () => ({
  type: 'SORT_BY_WRONG_ANSWER'
});

// SORT_BY_PICKED_WORD
const sortByPickedWord = () => ({
  type: 'SORT_BY_PICKED_WORD'
});

// SORT_BY_PICKED_TRANSLATION
const sortByPickedTranslation = () => ({
  type: 'SORT_BY_PICKED_TRANSLATION'
});

// Reducers

// Scores Reducer
const scoresReducerDefaultState = { rightAnswerCount: 0, wrongAnswerCount: 0 };
const scoresReducer = (state = scoresReducerDefaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'RESET':
      return {
        rightAnswerCount: 0,
        wrongAnswerCount: 0
      };
    case 'SET':
      return action.count;
    default: 
      return state;
  }
};

const sortByReducerDefaultState = {
  rightAnswer: undefined,
  wrongAnswer: undefined,
  pickedWord: undefined,
  pickedTranslation: undefined
}

const sortByReducer = (state = sortByReducerDefaultState, action) => {
  switch (action.type) {
    case 'RIGHT_ANSWER':
      return {
        ...state,
        rightAnswer: action.rightAnswer
      };
    case 'WRONG-ANSWER':
      return {
        ...state,
        wrongAnswer: action.wrongAnswer
      };
    case 'PICKED_WORD':
      return {
        ...state,
        pickedWord: action.pickedWord
      };
    case 'PICKED_TRANSLATION':
      return {
        ...state,
        pickedTranslation: action.pickedTranslation
      };
    default: 
      return state;
  }
}

const getVisibleScores = (scores, { pickedWord, pickedTranslation, rightAnswer, wrongAnswer }) => {
  // TODO: modify code from TestSkillsPage here
}

const demoState = {
  scores: [{
    count: {
      rightAnswerCount: 0,
      wrongAnswerCount: 0,
    },
    iconName: ''
  }],
  sortBy: {
    pickedWord: undefined,
    pickedTranslation: undefined,
    rightAnswer: undefined,
    wrongAnswer: undefined
  }
};