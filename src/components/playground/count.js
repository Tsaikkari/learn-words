import { createStore, combineReducers } from 'redux';
import { v1 as uuid } from 'uuid';

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

// SORT_BY_RIGHT_ANSWER
const sortByRightAnswer = () => ({
  type: 'SORT_BY_RIGHT_ANSWER'
});

// SORT_BY_WRONG_ANSWER
const sortByWrongAnswer = () => ({
  type: 'SORT_BY_WRONG_ANSWER'
});

// Reducers

// Scores Reducer
const scoresReducerDefaultState = [];
const scoresReducer = (state = scoresReducerDefaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'RESET':
      return [{
        rightAnswerCount: 0,
        wrongAnswerCount: 0
      }];
    default: 
      return state;
  }
};

const sortByReducerDefaultState = {
  rightAnswer: undefined,
  wrongAnswer: undefined
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