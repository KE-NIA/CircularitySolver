import React from 'react';
import FaroIonButtons from './FaroIonButtons';
import LeicaAt40xButtons from './LeicaButtons';
import FaroVantageButtons from './FaroVantageButtons';

export default class TrackerPad extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    if (this.props.activeSensor === 'FaroIon') {
      return (
        <FaroIonButtons connectSensor={() => { this.props.isConnected}}/>
      );
    } else if (this.props.activeSensor === 'LeicaAt40x') {
      return (
        <LeicaAt40xButtons connectSensor={() => {this.props.connectSensor}}/>
      );
  	 }else if(this.props.activeSensor == 'FaroVantage'){
  	 	  return (

	        <FaroVantageButtons connectSensor={() => {this.props.connectSensor}}/>
	      );
  	 }else{
  	 	  return (
	        <div>"please choose a laser tracker"</div>
	      );
  	 }

    }
}
