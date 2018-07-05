/**
 * @file Root reducer, combines all reducers.
 */

import { combineReducers } from 'redux';

import serverTimestampReducer from './server-timestamp-reducer';
import appReducer from './app-reducer';

export default combineReducers({
  serverTimestamp: serverTimestampReducer,
  app: appReducer,
});
