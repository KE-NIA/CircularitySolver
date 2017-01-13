'use strict';

import { combineReducers } from 'redux';
import sensorReducer from './sensorReducer';


/**
 * Combines the reducers to one root reducer.
 */
const rootReducer = combineReducers({
  sensor: sensorReducer

});

export default rootReducer;
