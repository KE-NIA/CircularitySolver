'use strict';

import { combineReducers } from 'redux';
import sensorReducer from './sensorReducer';
import trackerReducer from './trackerUtilReducer';

/**
 * Combines the reducers to one root reducer.
 */
const rootReducer = combineReducers({
  tracker: trackerReducer,
   sensor: sensorReducer

});

export default rootReducer;
