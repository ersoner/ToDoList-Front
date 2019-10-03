import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import {loginReducer} from './reducers/login'
import {registerReducer} from "./reducers/register";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({loginReducer, registerReducer}), composeEnhancer(applyMiddleware(logger, thunk)));

export default store;
