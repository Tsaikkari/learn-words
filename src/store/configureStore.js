import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import wordsReducer from '../reducers/words';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

export default () => {
  const store = createStore(  // State and action passed in as arguments through reducers
    combineReducers({         // connect reducers to the store
      words: wordsReducer,
      filters: filtersReducer,
      auth: authReducer
    }), 
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};




