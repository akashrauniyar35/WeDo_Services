import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import rootReducers from './rootReducer';

export default store = createStore(rootReducers, applyMiddleware(logger));