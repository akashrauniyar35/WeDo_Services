import { combineReducers } from 'redux';
import authenticationReducers from './AuthenticationSlice';

const rootReducers = combineReducers({ authentication: authenticationReducers });

export default rootReducers;