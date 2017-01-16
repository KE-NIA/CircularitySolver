import { combineReducers } from 'redux';
import sensorReducer from './sensorReducer';
import mainReducer from './mainReducer';


/**
 * Combines the reducers to one root reducer.
 */
const rootReducer = combineReducers({
  sensor: sensorReducer,
  main: mainReducer,

});

export default rootReducer;
