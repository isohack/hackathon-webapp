import appStatusReducer from './appStatus';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  appStatus: appStatusReducer,
  isLogged: loggedReducer
});

export default allReducers;