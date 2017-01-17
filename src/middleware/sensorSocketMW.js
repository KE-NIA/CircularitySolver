import { chooseFaroIonRequest, chooseFaroIonSuccessful, chooseFaroIonFail,
        chooseFaroVantageRequest, chooseFaroVantageSuccessful, chooseFaroVantageFail,
        chooseLeicaRequest, chooseLeicaSuccessful, chooseLeicaFail,
        connectSensorRequest, connectSensorSuccessful, connectSensorFail,
        singleMeasureActionRequest, singleMeasureActionSuccessful, singleMeasureActionFail,
        disConnectSensorRequest, disConnectSensorSuccessful, disConnectSensorFail,
        toggleSensorRequest, toggleSensorSuccessful, toggleSensorFail,
        homeActionRequest, homeActionSuccessful, homeActionFail,
        compItActionRequest, compItActionSuccessful, compItActionFail,
        initActionRequest, initActionSuccessful, initActionFail,
        twoSideMeasurementRequest, twoSideMeasurementSuccessful, twoSideMeasurementSuccessFail
       } from '../actions/sensorActions';
import {twoSideMeasConfigRequest, twoSideMeasConfigSuccessful, twoSideMeasConfigFail
       } from '../actions/trackerUtilActions'
import {
     CONNECT_SENSOR_REQUEST,
     CONNECT_SENSOR_SUCCESSFUL,
     CONNECT_SENSOR_FAIL,

     DISCONNECT_SENSOR_REQUEST,
     DISCONNECT_SENSOR_SUCCESSFUL,
     DISCONNECT_SENSOR_FAIL,

     CHOOSE_FAROION_REQUEST,
     CHOOSE_FAROION_SUCCESSFUL,
     CHOOSE_FAROION_FAIL,

     CHOOSE_VANTAGE_REQUEST,
     CHOOSE_VANTAGE_SUCCESSFUL,
     CHOOSE_VANTAGE_FAIL,

     CHOOSE_LEICA_REQUEST,
     CHOOSE_LEICA_FAIL,
     CHOOSE_LEICA_SUCCESSFUL,

     SINGLE_MEASURE_ACTION_REQUEST,
     SINGLE_MEASURE_ACTION_SUCCESSFUL,
     SINGLE_MEASURE_ACTION_FAIL,

     TOGGLE_SENSOR_REQUEST,
     TOGGLE_SENSOR_SUCCESSFUL,
     TOGGLE_SENSOR_FAIL,

     HOME_ACTION_REQUEST,
     HOME_ACTION_SUCCESSFUL,
     HOME_ACTION_FAIL,

     COMPIT_ACTION_REQUEST,
     COMPIT_ACTION_SUCCESSFUL,
     COMPIT_ACTION_FAIL,

     INIT_ACTION_REQUEST,
     INIT_ACTION_SUCCESSFUL,
     INIT_ACTION_FAIL,

     TWO_SIDE_MEASURE_ACTION_REQUEST,
     TWO_SIDE_MEASURE_ACTION_SUCCESSFUL,
     TWO_SIDE_MEASURE_ACTION_FAIL

} from '../actions/sensorActions';
import { TWO_SIDE_MEASCONFIG_REQUEST,
       TWO_SIDE_MEASCONFIG_SUCCESSFUL,
       TWO_SIDE_MEASCONFIG_FAIL} from '../actions/trackerUtilActions'
// script variables
let activeCmd = { id: 0, type: ''}
let websocket;

/**
 *Initialize the connection between webservice(websocket) and
 *trackerpad if the html page refreshes
 *
 * @param evt
 */
export const initWebSocket = (store) => {

   // as soon as the connection between Trackerpad and webservice is open
   // the function OnOpen will be triggered
   // onOpen successful -> you can communicate with the service
  const onOpen = (evt) =>
    {
      console.log('HIER BEI ONOPEN, Mit Webservice verbunden');
  }
   // if the onOpen not successful -> onClose will be  triggered
  const onClose = (evt) =>
    {
    console.log('HIER BEI ONCLOSE');
  }
   // if there is an error during the connection -> onErro will be triggered
  const onError = (evt) =>
    {
      writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
  }

   // dispatch specific action to trigger update
  const onMessage = (evt) => {
     var response = JSON.parse(evt.data);

    if (response == null) {
       // dispatch sensorErrorAction('sensor response is null')
       console.log('sensor response is null');
      return;
    }

    if (response.hasOwnProperty('error')) {
       // dispatch sensorErrorAction(response.error.errorMsg)
       console.log(response.error.errorMsg);
      return;
    }

     // checks if Cmd.Type is right and if evt.data.id matchs with activeCmd.id
    if (activeCmd.type === 'connect' && activeCmd.id === response.id) {
       console.log('onmessage connect');
      if (response.result.successful) {
        store.dispatch(connectSensorSuccessful(response));
        return;
      } else {
        store.dispatch(connectSensorFail(response));
        return;
      }

     // if there is a connect function, there must also be a disconnect ...
     console.log ('onmessage disconnect');
    } else if (activeCmd.type === 'disconnect' && activeCmd.id === response.id) {
      if (response.result.successful) {
        store.dispatch(disConnectSensorSuccessful(response));
        return;
      } else {
        store.dispatch(disConnectSensorFail(response));
        return;
      }

     // Block which handle´s the Measure Button Response
    } else if (activeCmd.type === 'measure' && activeCmd.id === response.id) {
       console.log('onmessage measure')
      if (!response.hasOwnProperty('error')) {
        store.dispatch(singleMeasureActionSuccessful(response));
         return;
       }else{
         store.dispatch(singleMeasureActionFail(response));
         return;
       }
     //Block which handle´s the Toggle Sight Button Response
     }else if (activeCmd.type == 'toggle' && activeCmd.id == response.id){
       console.log('onmessage toggle')
       if(!response.hasOwnProperty('error')){
         store.dispatch(toggleSensorSuccessful(response));
         return;
       }else{
         store.dispatch(toggleSensorFail(response));
         return;
       }

     //Block wich handle´s the Home Button Response
     }else if (activeCmd.type == 'home' && activeCmd.id == response.id){
       console.log('onmessage home')
       if(!response.hasOwnProperty('error')){
         store.dispatch(homeActionSuccessful(response));
         return;
       }else{
         store.dispatch(homeActionFail(response));
         return;
       }
     //Block wich handle´s the CompIt Button Response
   }else if (activeCmd.type == 'compIt' && activeCmd.id == response.id){
       console.log('onmessage compIt')
       if(!response.hasOwnProperty('error')){
         store.dispatch(compItActionSuccessful(response));
         return;
       }else{
         store.dispatch(compItActionFail(response));
         return;
       }
     //Block wich handle´s the Init (Leica Only )Button Response
     }else if (activeCmd.type == 'init' && activeCmd.id == response.id){
       console.log('onmessage init')
       if(!response.hasOwnProperty('error')){
         store.dispatch(initActionSuccessful(response));
         return;
       }else{
         store.dispatch(initActionFail(response));
         return;
       }
      //Block wich handle´s the ChooseFaroIOn  Response
     }else if (activeCmd.type == 'chooseFaroIon' && activeCmd.id == response.id){
       console.log('onmessage chooseFaroIon')
       if(!response.hasOwnProperty('error')){
         store.dispatch(chooseFaroIonSuccessful(response));
         return;
       }else{
         store.dispatch(chooseFaroIonFail(response));
         return;
       }
       //Block wich handle´s the ChoosefaroVantage Response
     }else if (activeCmd.type == 'chooseFaroVantage' && activeCmd.id == response.id){
       console.log('onmessage chooseFaroVantage')
       if(!response.hasOwnProperty('error')){
         store.dispatch(chooseFaroVantageSuccessful(response));
         return;
       }else{
         store.dispatch(chooseFaroVantageFail(response));
         return;
       }
       //Block wich handle´s the chooseLeica Response
     }else if (activeCmd.type == 'chooseLeica' && activeCmd.id == response.id){
         console.log('onmessage chooseLeica')
         if(!response.hasOwnProperty('error')){
           store.dispatch(chooseLeicaSuccessful(response));
           return;
         }else{
           store.dispatch(chooseLeicaFail(response));
           return;
         }
       //Block wich handle´s the BS Check Response
    }else if (activeCmd.type == 'twoSideMeasurement' && activeCmd.id == response.id){
       console.log('onmessage twoSideMeasurement')
       if(!response.hasOwnProperty('error')){
         store.dispatch(twoSideMeasConfigSuccessful(response));
         return;
       }else{
         console.log("could not eather set the measurmenttype or measure");
         return;
       }
     }else{
       console.log("onmessage aufgerufen 4");
     }
   }

   /* socket Connection callbacks
   set local const to functions with the value 'evt'*/
   websocket = new WebSocket("ws://127.0.0.1:8090")
   websocket.onopen = function(evt) { onOpen(evt) };
   websocket.onclose = function(evt) { onClose(evt) };
   websocket.onmessage = function(evt) { onMessage(evt) };
   websocket.onerror = function(evt) { onError(evt) };
}

/**
 * Middleware that reacts on specific actions and sends sensor tasks to the
 * backend via websocket connection.
 * @param store
 */
export  const sensorSocketMiddleware = store => next => action => {

    //init local var
    const result = next(action);

    //react on specific actions. actions descripted in the sensorAction.js
    switch(action.type){
        case CONNECT_SENSOR_REQUEST: {
          console.log('jetzt bin ich beim middleware gedöns')
          connect();
          break;
        }
        case DISCONNECT_SENSOR_REQUEST: {
            console.log('jetzt bin ich beim middleware gedöns disconnect MW')
            disconnect();
            break;
        }
        case CHOOSE_FAROION_REQUEST: {
          console.log('MW CHOOSE_FAROION_REQUEST')
          chooseFaroIon();
            break;
        }
        case CHOOSE_VANTAGE_REQUEST: {
          console.log('MW CHOOSE_VANTAGE_REQUEST')
          chooseFaroVantage();
            break;
        }
        case CHOOSE_LEICA_REQUEST: {
          console.log('MW CHOOSE_LEICA_REQUEST')
          chooseLeica();
            break;
        }
        case SINGLE_MEASURE_ACTION_REQUEST: {
          console.log('MW MEASURE_ACTION_REQUEST')
          measure();
            break;
        }
        case TOGGLE_SENSOR_REQUEST: {
          console.log('MW TOGGLE_SENSOR_REQUEST')
          toggle();
            break;
        }
        case HOME_ACTION_REQUEST: {
          console.log('MW HOME_ACTION_REQUEST')
          home();
            break;
        }
      case COMPIT_ACTION_REQUEST: {
       console.log('MW COMPIT_ACTION_REQUEST')
        compIt();
        break;
        }
        case INIT_ACTION_REQUEST: {
          console.log('MW INIT_ACTION_REQUEST')
          initializeLeica();
            break;

        }
        case TWO_SIDE_MEASURE_ACTION_REQUEST: {
          console.log('MW TWO_SIDE_MEASURE_ACTION_REQUEST')
          measure();
            break;
        }
        case TWO_SIDE_MEASCONFIG_REQUEST: {
          console.log('MW TWO_SIDE_MEASCONFIG_REQUEST')
          twoSideMeasurementConfig();
            break;
    }
    return result;
};
}
/**
 * Sends parameters(a RequestObject) to the webservice which
 *  establish/enable a connection between trackerpad and tracker
 * @param
 */
function connect(){
  //set up script variables
  activeCmd.id = activeCmd.id+1; //sum up 1 to the local variable idCount
  activeCmd.type = "connect"; //set the active Command Type (activeCmd.type) to connect
  //build up request object
  let message = JSON.stringify({
                "jsonrpc": "2.0",
                "id": activeCmd.id,
                "method": "connectSensor",
                "params": {}
              }, undefined, 4)

  //fire methods and websocket
  writeToScreen('SENT: ');
  writeToScreen(message);
  websocket.send(message);
}

/**
 *Sends Parameters(a RequestObject) to the webservice and middleware
 *which disabale the connection between trackerpad and tracker
 * @param
 */
function disconnect(){
  console.log("disconnect aufgerufen");
  //set up script variables
  activeCmd.id = activeCmd.id+1; //sum up 1 to the local variable idCount
  activeCmd.type = "disconnect"; //set the active Command Type (activeCmd.type) to connect

  //build up request object
  let message = JSON.stringify({
                "jsonrpc": "2.0",
                "id": activeCmd.id,
                "method": "disconnectSensor",
                "params": {}
              })
  //fire methods and websocket
  writeToScreen('SENT: ');
  writeToScreen(message);
  websocket.send(message);
}

/**
*
*@param {string} message - string to display on screen
*/
function writeToScreen(message){

  const output = document.getElementById("output_area");
  var pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  output.appendChild(pre);
}

/**
 *Sends Request(Object) to the webservice which tell the "backend" the Tracker
 * shall measure(Azimuth,Zenith,Distance)
 * @param
 */
function measure(){

  //set up script variables
  activeCmd.id = activeCmd.id+1; //sum up 1 to the local variable idCount
  activeCmd.type = "measure"; //set the active Command Type (activeCmd.type)
  let  message = JSON.stringify({
                "jsonrpc": "2.0",
                "id": activeCmd.id,
                "method": "measure",
                "params": {}
              })

  //fire methods and websocket
  writeToScreen('SENT: ');
  writeToScreen(message);
  websocket.send(message);

}
/**
 *Sends Request(Object) to the webservice which tell the "backend" the Tracker
 * shall toggle from frontside to backside
 * @param
 */
function toggle(){

  //set up script variables
  activeCmd.id = activeCmd.id+1; //sum up 1 to the local variable idCount
  activeCmd.type = "toggle"; //set the active Command Type (activeCmd.type)
  let  message = JSON.stringify({
                "jsonrpc": "2.0",
                "id": activeCmd.id,
                "method": "doSensorAction",
                "params": {"name": "toggleSightOrientation", "params":[]}
              })
  writeToScreen('SENT: ');
  writeToScreen(message);
  websocket.send(message);
}

/**
 *Sends Request(Object) to the webservice which tell the "backend" the Tracker
 * shall go to home position (Faro only)
 * @param
 */
function home(){
  //set up script variables
  activeCmd.id = activeCmd.id+1; //sum up 1 to the local variable idCount
  activeCmd.type = "home"; //set the active Command Type (activeCmd.type)
  let  message = JSON.stringify({
                 "jsonrpc": "2.0",
                 "id": activeCmd.id,
                 "method": "doSensorAction",
                 "params": {"name": "home", "params":[]}
               })
   writeToScreen('SENT: ');
   writeToScreen(message);
   websocket.send(message);
 }

 /**
  *Sends Request(Object) to the webservice which tell the "backend" the Tracker
  * shall make a compensation position (Faro only)
  * @param
  */
function compIt(){

  //set up script variables
  activeCmd.id = activeCmd.id+1; //sum up 1 to the local variable idCount
  activeCmd.type = "compIt"; //set the active Command Type (activeCmd.type)
  let  message = JSON.stringify({
                  "jsonrpc": "2.0",
                  "id": activeCmd.id,
                  "method": "doSensorAction",
                  "params": {"name": "compIt", "params":[]}
                })
    writeToScreen('SENT: ');
    writeToScreen(message);
    websocket.send(message);
  }
  /**
   *Sends Request(Object) to the webservice which tell the "backend" the Tracker
   * shall make a initialize Leica (Leica only)
   * @param
   */
function initializeLeica(){

  //set up script variables
  activeCmd.id = activeCmd.id+1; //sum up 1 to the local variable idCount
  activeCmd.type = "init"; //set the active Command Type (activeCmd.type)
  let  message = JSON.stringify({
                  "jsonrpc": "2.0",
                  "id": activeCmd.id,
                  "method": "doSensorAction",
                  "params": {"name": "initialize", "params":[]}
                })

    var messageFormatted = JSON.stringify(JSON.parse(message),null,2);
    writeToScreen('SENT: ');
    writeToScreen(messageFormatted);
    websocket.send(message);
  }
  /**
   *Sends Request(Object) to the webservice which tell the "backend" the Tracker
   * the Tracker you choose is FaroIOn
   * @param
   */
function chooseFaroIon()
  {
    //set up script variables
    activeCmd.id = activeCmd.id+1; //sum up 1 to the local variable idCount
    activeCmd.type = "chooseFaroIon"; //set the active Command Type (activeCmd.type)
    const message = JSON.stringify({
                "jsonrpc": "2.0",
                "id": activeCmd.id,
                "method": "getSensor",
                "params": {
                  "name": "FaroLaserTracker",
                  "parameter": {
                         "sensorParameter": [{
                              "name": "connection",
                              "properties": {
                                  "trackerType": "ion",
                                  "ip": "192.168.168.241"
                              },
                              "trackerTypes": ["ion",
                                               "vantage"
                              ]
                          }, {
                              "name": "probe",
                              "properties": {
                                  "activeProbe": "1.5",
                                  "probes": ["0.5",
                                             "7/8",
                                             "1.5"]
                              }
                          }, {
                              "name": "distanceMode",
                              "properties": {
                                  "activeDistanceMode": "ADMOnly",
                                  "distanceModes": ["ADMOnly",
                                                    "InterferometerOnly",
                                                    "InterferometerSetByADM"]
                              }
                          }]
                  }
                }
              }, undefined, 4)

    websocket.send(message);
    writeToScreen('SENT: ');
    writeToScreen(message);
  }
  /**
   *Sends Request(Object) to the webservice which tell the "backend" the Tracker
   * the Tracker you choose is FaroVantage
   * @param
   */
function chooseFaroVantage(){
    //set up script variables
    activeCmd.id = activeCmd.id+1; //sum up 1 to the local variable idCount
    activeCmd.type = "chooseFaroVantage"; //set the active Command Type (activeCmd.type)
    const message = JSON.stringify({
                "jsonrpc": "2.0",
                "id": activeCmd.id,
                "method": "getSensor",
                "params": {
                  "name": "FaroLaserTracker",
                  "parameter": {
                         "sensorParameter": [{
                              "name": "connection",
                              "properties": {
                                  "trackerType": "vantage",
                                  "ip": "128.128.128.100"
                              },
                              "trackerTypes": ["ion",
                                               "vantage"
                              ]
                          }, {
                              "name": "probe",
                              "properties": {
                                  "activeProbe": "1.5",
                                  "probes": ["0.5",
                                             "7/8",
                                             "1.5"]
                              }
                          }, {
                              "name": "distanceMode",
                              "properties": {
                                  "activeDistanceMode": "ADMOnly",
                                  "distanceModes": ["ADMOnly",
                                                    "InterferometerOnly",
                                                    "InterferometerSetByADM"]
                              }
                          }]
                  }
                }
              }, undefined, 4)
    writeToScreen('SENT: ');
    writeToScreen(message);
    websocket.send(message);
}
/**
 *Sends Request(Object) to the webservice which tell the "backend" the Tracker
 * the Tracker you choose is The leica Tracker
 * @param
 */
 function chooseLeica(){
  console.log('ich bin hier bei choose leica')
      //set up script variables
      activeCmd.id = activeCmd.id+1; //sum up 1 to the local variable idCount
      activeCmd.type = "chooseLeica"; //set the active Command Type (activeCmd.type)
  const message = JSON.stringify({
              "jsonrpc": "2.0",
              "id": activeCmd.id,
              "method": "getSensor",
              "params": {
                "name": "LeicaLaserTracker",
                "parameter": {
                      "sensorParameter": [{
                      "name": "connection",
                      "properties": {
                        "ip": "192.168.0.1",
                        "port": 700
                      }
                    }, {
                      "name": "probe",
                      "properties": {
                        "activeProbe": "RRR15",
                        "probes": ["RRR15",
                          "RRR05",
                          "RRR0875",
                          "glass prism"
                        ]
                      }
                    }, {
                      "name": "measureMode",
                      "properties": {
                        "activeMeasureMode": "fast",
                        "MeasureModes": ["fast",
                          "standard",
                          "precise",
                          "stationary"
                        ]
                      }
                    }]
                }
              }
            })
  writeToScreen('SENT: ');
  writeToScreen(message);
  websocket.send(message);
}

/**
 * function which changes the measurementConfig from 'default' to
 * 2sightcheck (measure Frontside -> toggle sight -> measure backsight)
 * @param
 */
function twoSideMeasurementConfig(){
  console.log ('twoSideMeasurementConfig funktion ganz weit unten in der middleware')
    activeCmd.id = activeCmd.id+1; //sum up 1 to the local variable idCount
    activeCmd.type = "twoSideMeasurementConfig"; //set the active Command Type (activeCmd.type) to connect
    const message = JSON.stringify( { "jsonrpc": "2.0", "method": "setMeasurementConfig","id": activeCmd.id, "params": {
      // polar or cartesian
       "readingType": "cartesian",
       "measureType": "singlePoint",
       "measurementConfig": [{
           "name": "singlePoint",
           "properties": {
               "frequency": 1000,
               "iteration": 1,
               "measureTwoSides": true
           }
       }, {
           "name": "scan",
           "properties": {
               "scanMethod": "distance",
               "frequency": 1,
               "count": 1000,
               "delta": 0.001,
               "scanMethods": ["distance",
                               "time"]
           }
       }], }
  })
    writeToScreen('SENT: ');
    writeToScreen(message);
    websocket.send(message);
  }
  function singleMeasurementConfig(){
    console.log ('singleMeasurement funktion ganz weit unten in der middleware')
      activeCmd.id = activeCmd.id+1; //sum up 1 to the local variable idCount
      activeCmd.type = "singleMeasurement"; //set the active Command Type (activeCmd.type) to connect
      const message = JSON.stringify( { "jsonrpc": "2.0", "method": "setMeasurementConfig","id": activeCmd.id, "params": {
        // polar or cartesian
         "readingType": "cartesian",
         "measureType": "singlePoint",
         "measurementConfig": [{
             "name": "singlePoint",
             "properties": {
                 "frequency": 1000,
                 "iteration": 1,
                 "measureTwoSides": false
             }
         }, {
             "name": "scan",
             "properties": {
                 "scanMethod": "distance",
                 "frequency": 1,
                 "count": 1000,
                 "delta": 0.001,
                 "scanMethods": ["distance",
                                 "time"]
             }
         }], }
    })
      writeToScreen('SENT: ');
      writeToScreen(message);
      websocket.send(message);
    }
