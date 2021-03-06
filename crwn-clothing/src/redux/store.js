import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// set up middleware
const middlewares = [logger];

// instantiate store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;