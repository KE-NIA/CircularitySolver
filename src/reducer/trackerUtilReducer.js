import {
      TWO_SIDE_MEASCONFIG_SUCCESSFUL,
      TWO_SIDE_MEASCONFIG_FAIL }
from '../actions/trackerUtilActions'

const initialTracker = {
  measurementConfig: 'single',
};

const trackerReducer = (state = initialTracker, action) => {
  switch (action.type) {
    case TWO_SIDE_MEASCONFIG_SUCCESSFUL: {
      return Object.assign({}, state, {
        measurementConfig: 'double',
      });
    }
    case TWO_SIDE_MEASCONFIG_FAIL: {
      return Object.assign({}, state, {
        measurementConfig: state.measurementConfig
      });
    }
  }
  return state;
}

export default trackerReducer
