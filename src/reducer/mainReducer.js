import {
    CHOOSE_FARO,
    CHOOSE_VANTAGE,
    PLAIN_MEASURMENT,
    CIRCULARITY_HELP
  } from '../actions/Actions';


 // initial state for the sensor object
const main = {
  firstpage: 'none', // name as string of the sensor
  secondpage: false, // all available sensor types
  thirdpage: false, // check if sensor is connected
  fourthpage: 'none', // hypotetically ..counts the number of measurements
};

/**
 * reducer for sensor actions
 * manage actions from middleware
 * switches the value of the states on top
 * I think the ActionNames speaks for itself
 * @param
 */
const mainReducer = (state = main, action) => {
    switch (action.type) {
        // set new sensor
      case CHOOSE_FARO: {
        return Object.assign({}, state, {
          firstpage: 'faroion'
        });
      }
      case CHOOSE_VANTAGE: {
        return Object.assign({}, state, {
          firstpage: 'vantage'
        });
      }
      case PLAIN_MEASURMENT: {
        return Object.assign({}, state, {
          secondpage: 'true'
        });
      }
      case CIRCULARITY_HELP: {
        return Object.assign({}, state, {
          thirdpage: true
        });
      }
    }
  return state;
};

export default mainReducer;
