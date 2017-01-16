export const SET_SENSOR_REQUEST = 'SET_SENSOR_REQUEST'
export const SET_SENSOR_SUCCESSFUL ='SET_SENSOR_SUCCESSFUL';
export const SET_SENSOR_FAIL ='SET_SENSOR_FAIL';

export const CONNECT_SENSOR_REQUEST='CONNECT_SENSOR_REQUEST'
export const CONNECT_SENSOR_SUCCESSFUL='CONNECT_SENSOR_SUCCESSFUL'
export const CONNECT_SENSOR_FAIL = 'CONNECT_SENSOR_FAIL'

export const SINGLE_MEASURE_ACTION_REQUEST = 'SINGLE_MEASURE_ACTION_REQUEST'
export const SINGLE_MEASURE_ACTION_SUCCESSFUL ='SINGLE_MEASURE_ACTION_SUCCESSFUL'
export const SINGLE_MEASURE_ACTION_FAIL = 'SINGLE_MEASURE_ACTION_FAIL'

export const DISCONNECT_SENSOR_REQUEST = 'DISCONNECT_SENSOR_REQUEST'
export const DISCONNECT_SENSOR_SUCCESSFUL ='DISCONNECT_SENSOR_SUCCESSFUL'
export const DISCONNECT_SENSOR_FAIL = 'DISCONNECT_SENSOR_FAIL'

export const CHOOSE_FAROION_REQUEST ='CHOOSE_FAROION_REQUEST'
export const CHOOSE_FAROION_SUCCESSFUL= 'CHOOSE_FAROION_SUCCESSFUL'
export const CHOOSE_FAROION_FAIL= 'CHOOSE_FAROION_FAIL'

export const CHOOSE_VANTAGE_REQUEST= 'CHOOSE_VANTAGE_REQUEST'
export const CHOOSE_VANTAGE_SUCCESSFUL= 'CHOOSE_VANTAGE_SUCCESSFUL'
export const CHOOSE_VANTAGE_FAIL= 'CHOOSE_VANTAGE_FAIL'

export const TWO_SIDE_MEASURE_ACTION_REQUEST = 'TWO_SIDE_MEASURE_ACTION_REQUEST'
export const TWO_SIDE_MEASURE_ACTION_SUCCESSFUL = 'TWO_SIDE_MEASURE_ACTION_SUCCESSFUL'
export const TWO_SIDE_MEASURE_ACTION_FAIL = 'TWO_SIDE_MEASURE_ACTION_FAIL'

export function setSensor(sensor){
  console.log ('ich bin hier bei SET sensor FUNKTION')
  if(sensor == 'FaroIon'){
    return dispatch => {dispatch(chooseFaroIonRequest());}
  }else if (sensor == 'FaroVantage') {
    return dispatch =>{dispatch(chooseFaroVantageRequest());}
  }else{
    let error = "There´s something wrong ";
    return dispatch => {dispatch(setSensorFail(error));}
  };
}
export function chooseFaroIonRequest(){
      console.log ('ich bin hier bei chooseFaroIonRequest')
  return{
    type:CHOOSE_FAROION_REQUEST,


  };
}
export function chooseFaroIonSuccessful(response){
      console.log('hier bin ich beim faroionsuccesfull')
  return{
    type:CHOOSE_FAROION_SUCCESSFUL,
    response
  };
}
export function chooseFaroIonFail(error){
      console.log('hier bin ich beim FAROIONFAIL')
  return{
    type:CHOOSE_FAROION_FAIL,
    error
  };
}

export function chooseFaroVantageRequest(){
      console.log ('ich bin hier bei chooseFaroVantageRequest')
  return{
    type:CHOOSE_VANTAGE_REQUEST
  };
}
export function chooseFaroVantageSuccessful(response){
      console.log('hier bin cih beim chooseFaroVantageSuccessful')
  return{
    type:CHOOSE_VANTAGE_SUCCESSFUL,
    response
  };
}
export function chooseFaroVantageFail(error){
      console.log('hier bin cih beim FAROIONFAIL')
  return{
    type:CHOOSE_VANTAGE_FAIL,
    error
  }
}

export function chooseLeicaRequest(){
        console.log ('ich bin hier bei CHOOSE_LEICA_REQUEST')
  return{
    type:CHOOSE_LEICA_REQUEST
        };
}
export function chooseLeicaSuccessful(response){
      console.log('hier bin cih beim CHOOSE_LEICA_SUCCESSFUL')
  return{
    type:CHOOSE_LEICA_SUCCESSFUL,
    response
  };
}
export function chooseLeicaFail(error){
      console.log('hier bin cih beim CHOOSE_LEICA_FAIL')
  return{
    type:CHOOSE_LEICA_FAIL,
    error
  };
}
export function setSensorFail(error){
 console.log ('ich bin hier bei setSensorFail Failure')
 return{
    type:SET_SENSOR_FAIL,
    error
 };
}
/**
 *actioncreator for the connectSensor() method
 *action will be fired as request
 * @param
 */
export function connectSensorRequest(){
 console.log ('ich bin hier bei Connect sensor request')
 return{
    type:CONNECT_SENSOR_REQUEST
 };
}

/**
*actioncreator for the connectSensor() method
*action will be fired as response
* @param {string} response - might be the response from the middleware
*/
export function connectSensorSuccessful(response){
  console.log ('ich bin hier bei Connect sensor succsessful /actions')
  console.log(response)
  return{
    type:CONNECT_SENSOR_SUCCESSFUL,
    response
  };
}

/**
*actioncreator for the connectSensor() method.
*action will be fired if the connection fails.
* @param {string} error
*/
export function connectSensorFail(error){
 console.log ('ich bin hier bei Connect sensor Failure')
 return{
    type:CONNECT_SENSOR_FAIL,
    error
 };
}

/**
* Checks if a sensor(Tracker) is already choosen,
* then dispatches an action from above
* @param {string} sensor
* @param {string} error
* @param {string} response
*/
export function connectSensor(activeSensor){
  console.log ('ich bin hier bei Connect sensor FUNKTION')
    if (activeSensor == 'none'){
        let error = "Puh, that shouldnt happened, good luck,you are f*****";
        return dispatch => {dispatch(connectSensorFail(error));};
    }
    return dispatch => {
        dispatch(connectSensorRequest());
    };
}

/**
* Checks if a sensor(Tracker) is already connected,
* then dispatches an action from below
* @param {string} isConnected
* @param {string} error
*/
export function singleMeasureAction(isConnected){
  console.log ('ich bin hier bei singleMeasureAction FUNKTION')
    if ( isConnected == false){
        let error = "Sensor not connected";
        return dispatch => {dispatch(singleMeasureActionFail(error));};
    }
    return dispatch => {
        dispatch(singleMeasureActionRequest());
    };
}

/**
 *actioncreator for the measureActionRequest() method
 *action will be fired as request
 * @param
 */
export function singleMeasureActionRequest(){
 console.log ('ich bin hier bei singlemeasure Action request')
 return{
    type:SINGLE_MEASURE_ACTION_REQUEST,
 };
}

/**
*actioncreator for the measureAction() method
*action will be fired as response if the action is successful
* @param {string} response - might be the response from the middleware
*/
export function singleMeasureActionSuccessful(response){
  console.log ('singlemeasureActionSuccessful')
  console.log(response)
  return{
    type:SINGLE_MEASURE_ACTION_SUCCESSFUL,
    response
  };
}

/**
*actioncreator for the measureAction() method.
*action will be fired if the measurement fails.
* @param {string} error
*/
export function singleMeasureActionFail(error){
 console.log ('ich bin hier bei measurAction Failure')
 return{
    type:SINGLE_MEASURE_ACTION_FAIL,
    error
 };
}

/**
 *actioncreator for the disConnectSensor() method
 *action will be fired as request
 * @param
 */
export function disConnectSensorRequest(){
 console.log ('ich bin hier bei disConnect sensor request')
 return{
    type:DISCONNECT_SENSOR_REQUEST,
 };
}

/**
*actioncreator for the disConnectSensor() method
*action will be fired as response
* @param {string} response - might be the response from the middleware
*/
export function disConnectSensorSuccessful(response){
  console.log ('ich bin hier bei DisConnect sensor ')
  console.log(response)
  return{
    type:DISCONNECT_SENSOR_SUCCESSFUL,
    response
  };
}

/**
*actioncreator for the disConnectSensor() method.
*action will be fired if the disconnect fails(which is...strange).
* @param {string} error
*/
export function disConnectSensorFail(error){
 console.log ('ich bin hier bei DisConnect sensor Failure')
 return{
    type:DISCONNECT_SENSOR_FAIL,
    error
 };
}

/**
* Checks if a sensor(Tracker) is already choosen,
* then dispatches an action from above
* @param {string} sensor
* @param {string} error
* @param {string} response
*/
export function disConnectSensor(activeSensor,error,sensor){
  console.log ('ich bin hier bei DisConnect sensor FUNKTION')
    if (activeSensor == 'none'){
        let error = "no Sensor chosen";
        return dispatch => {dispatch(disConnectSensorFail(error));};
    }
    return dispatch => {
        dispatch(disConnectSensorRequest());
    };
}

/**
 *actioncreator for the toggleSensor() method
 *action will be fired as request
 * @param
 */
export function toggleSensorRequest(){
 console.log ('ich bin hier bei TOGGLE request')
 return{
    type:TOGGLE_SENSOR_REQUEST,
 };
}

/**
*actioncreator for the toggleSensor() method
*action will be fired as response
* @param {string} response - might be the response from the middleware
*/
export function toggleSensorSuccessful(response){
  console.log ('ich bin hier bei Toggle succsessful sensor ')
  console.log(response)
  return{
    type:TOGGLE_SENSOR_SUCCESSFUL,
    response
  };
}

/**
*actioncreator for the toggleSensor() method.
*action will be fired if the toggleSensor() method fails.
* @param {string} error
*/
export function toggleSensorFail(error){
 console.log ('ich bin hier bei Toggle Sensor Failure')
 return{
    type:TOGGLE_SENSOR_FAIL,
    error
 };
}

/**
* Checks if a sensor(Tracker) is already choosen,
* then dispatches an action from above
* @param {string} isConnected
* @param {string} error
*/
export function toggleSensor(isConnected){
  console.log ('ich bin hier bei ToggleSensor FUNKTION')
    if ( isConnected == false){
        let error = "no Sensor connected";
        return dispatch => {dispatch(toggleSensorFail(error));};
    }
    return dispatch => {
        dispatch(toggleSensorRequest());
    };
}

/**
 *actioncreator for the homeAction() method
 *action will be fired as request
 * @param
 */
export function homeActionRequest(){
 console.log ('ich bin hier bei Home request')
 return{
    type:HOME_ACTION_REQUEST,
 };
}

/**
*actioncreator for the homeAction() method
*action will be fired as response
* @param {string} response - might be the response from the middleware
*/
export function homeActionSuccessful(response){
  console.log ('homeActionSuccessful')
  console.log(response)
  return{
    type:HOME_ACTION_SUCCESSFUL,
    response
  };
}

/**
*actioncreator for the homeAction() method.
*action will be fired if the homeAction() method fails.
* @param {string} error
*/
export function homeActionFail(error){
 console.log ('ich bin hier bei homeAction Failure')
 return{
    type:HOME_ACTION_FAIL,
    error
 };
}

/**
* Checks if a sensor(Tracker) is already connected,
* then dispatches an action from above
* @param {string} isConnected
* @param {string} error
*/
export function homeAction(isConnected){
  console.log ('ich bin hier bei Measuraction FUNKTION')
    if ( isConnected == false){
        let error = "Sensor not connected";
        return dispatch => {dispatch(homeActionFail(error));};
    }
    return dispatch => {
        dispatch(homeActionRequest());
    };
}

/**
 *actioncreator for the homeAction() method
 *action will be fired as request
 * @param
 */
export function compItActionRequest(){
 console.log ('ich bin hier bei compItActionRequest')
 return{
    type:COMPIT_ACTION_REQUEST,
 };
}

/**
*actioncreator for the compItAction() method
*action will be fired as response
* @param {string} response - might be the response from the middleware
*/
export function compItActionSuccessful(response){
  console.log ('compItActionSuccessful')
  console.log(response)
  return{
    type:COMPIT_ACTION_SUCCESSFUL,
    response
  };
}

/**
*actioncreator for the compItAction() method.
*action will be fired if the compItAction() method fails.
* @param {string} error
*/
export function compItActionFail(error){
 console.log ('ich bin hier bei compIt Failure')
 return{
    type:COMPIT_ACTION_FAIL,
    error
 };
}

/**
* Checks if a sensor(Tracker) is already connected,
* then dispatches an action from above
* @param {string} isConnected
* @param {string} error
*/
export function compItAction(isConnected){
  console.log ('ich bin hier bei compItAction FUNKTION')
    if ( isConnected == false){
        let error = "Sensor not connected";
        return dispatch => {dispatch(compItActionFail(error));};
    }
    return dispatch => {
        dispatch(compItActionRequest());
    };
}

/**
 *actioncreator for the initAction() method (Leica only)
 *action will be fired as request
 * @param
 */
export function initActionRequest(){
 console.log ('ich bin hier bei initActionRequest')
 return{
    type:INIT_ACTION_REQUEST,
 };
}

/**
*actioncreator for the initAction() method (Leica only)
*action will be fired as response
* @param {string} response - might be the response from the middleware
*/
export function initActionSuccessful(response){
  console.log ('initActionSuccessful')
  console.log(response)
  return{
    type:INIT_ACTION_SUCCESSFUL,
    response
  };
}

/**
*actioncreator for the initAction() method. (Leica only )
*action will be fired if the initAction() (really only leica) method fails.
* @param {string} error
*/
export function initActionFail(error){
 console.log ('ich bin hier bei initActionFail ')
 return{
    type:INIT_ACTION_FAIL,
    error
 };
}

/**
* Checks if the Leica sensor(Tracker) is already connected,
* then dispatches an action from above
* @param {string} isConnected
* @param {string} error
*/
export function initAction(isConnected){
  console.log ('ich bin hier bei initAction FUNKTION')
    if ( isConnected == false && activeSensor == 'LeicaAt40x'){
        let error = "Sensor not connected";
        return dispatch => {dispatch(initActionFail(error));};
    }
    return dispatch => {
        dispatch(initActionRequest());
    };
}



export function twoSideMeasure(isConnected){
  console.log ('ich bin hier bei twoSideMeasure FUNKTION')
    if ( isConnected == false){
        let error = "Sensor not connected";
        return dispatch => {dispatch(twoSideMeasureFail(error));};
    }
    return dispatch => {
        dispatch(twoSideMeasureActionRequest());
    };
}

/**
 *actioncreator for the measureActionRequest() method
 *action will be fired as request
 * @param
 */
export function twoSideMeasureActionRequest(){
 console.log ('ich bin hier bei measure Action request')
 return{
    type:TWO_SIDE_MEASURE_ACTION_REQUEST,
 };
}

/**
*actioncreator for the measureAction() method
*action will be fired as response if the action is successful
* @param {string} response - might be the response from the middleware
*/
export function twoSideMeasureSuccessful(response){
  console.log ('measureActionSuccessful')
  console.log(response)
  return{
    type:TWO_SIDE_MEASURE_ACTION_SUCCESSFUL,
    response
  };
}

/**
*actioncreator for the measureAction() method.
*action will be fired if the measurement fails.
* @param {string} error
*/
export function twoSideMeasureFail(error){
 console.log ('ich bin hier bei measurAction Failure')
 return{
    type:TWO_SIDE_MEASURE_ACTION_FAIL,
    error
 };
}
