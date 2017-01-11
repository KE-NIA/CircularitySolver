export const TWO_SIDE_MEASCONFIG_REQUEST='TWO_SIDE_MEASCONFIG_REQUEST'
export const TWO_SIDE_MEASCONFIG_SUCCESSFUL='TWO_SIDE_MEASCONFIG_SUCCESSFUL'
export const TWO_SIDE_MEASCONFIG_FAIL = 'TWO_SIDE_MEASCONFIG_FAIL'
/**
 *actioncreator for the trackerHandleActiveSensorChange() method
 *action will be fired as request
 * @param
 */
export function twoSideMeasConfigRequest(){
 console.log ('ich bin hier bei twoSideMeasConfigRequest')
 return{
    type:TWO_SIDE_MEASCONFIG_REQUEST,
 };
}

/**
*actioncreator for the trackerHandleActiveSensorChange() method
*action will be fired as response
* @param {string} response - might be the response from the middleware
*/
export function twoSideMeasConfigSuccessful(response){
  console.log ('ich bin hier bei twoSideMeasConfigSuccessful')
  console.log(response)
  return{
    type:TWO_SIDE_MEASCONFIG_SUCCESSFUL,
    response
  };
}

/**
*actioncreator for the trackerHandleActiveSensorChange() method.
*action will be fired if the sensorChange fails.
* @param {string} error
*/
export function twoSideMeasConfigFail(error){
 console.log ('ich bin hier bei twoSideMeasurementFail')
 return{
    type:TWO_SIDE_MEASCONFIG_FAIL,
    error
 };
}


/**
* hypotetically checks and handles an active sensor change
* then dispatches
* @param {string} tracker
* @param {string} error
* @param {string} response
*/
export function twoSideMeasConfig(isConnected){
console.log ('ich bin hier bei BSCheck FUNKTION')
  if (isConnected == false){
      let error = "Puh, that shouldnt happened, good luck,you are f*****";
      return dispatch => {dispatch(twoSideMeasConfigFail(error));};
  }
  return dispatch => {
      dispatch(twoSideMeasConfigRequest());
  };
}
