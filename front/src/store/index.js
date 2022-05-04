import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { itemReducer } from './reducers/itemReducer';

// REDUX Chrome devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  itemModule: itemReducer,
});

export const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// For Debug
window.myStore = store;
