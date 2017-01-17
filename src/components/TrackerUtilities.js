import React from 'react';
import { FormControl, Grid,Row,Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import {setSensor , connectSensor,disConnectSensor} from '../actions/sensorActions';
import TrackerPad from './TrackerPad';
import TrackerInput from './TrackerInput';
import TrackerOutput from './TrackerOutput';

const mapStateToProps = (state) => {
    return{
        activeSensor: state.sensor.activeSensor,
        sensorTypes: state.sensor.sensorTypes,
        isConnected: state.sensor.isConnected,
        measureNumber:state.sensor.measureNumber,
        toggleNumber:state.sensor.toggleNumber,
        homeNumber:state.sensor.homeNumber,
        compItNumber:state.sensor.compItNumber,
        init:state.sensor.init





    };
};
const mapDispatchToProps = (dispatch) => {
    return{
      onSetSensor: (name) => dispatch(setSensor(name)),
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class TrackerUtilities extends React.Component {

  constructor(props) {
    super(props);

    this.handleActiveSensorChange = this.handleActiveSensorChange.bind(this);

  }

  componentDidMount(){

  }

  handleActiveSensorChange(e){
      if(this.props.isConnected =='true' && this.props.activeSensor != 'none'){
        this.props.onDisConnectSensor(e);
         return;
      }
        this.setState({activeSensor: e.target.value});
        this.props.onSetSensor(e.target.value);
  }

  render() {
    const sensorOptions = this.props.sensorTypes.map(function(sensor){
        return(
            <option value={sensor} key={sensor}>{sensor}</option>
        );
    });
    return (
      <div>
        <Grid>
            <Row className ='show-grid' >
              <Col xs={2} md={2}>
                  <FormControl
                  componentClass="select" placeholder="sensor type" value={this.props.activeSensor} onChange={this.handleActiveSensorChange} disabled={this.props.isConnected}>
                  {sensorOptions}
                  </FormControl>
              </Col>

              <Col xs={2} md={2}>
                  <TrackerInput/>
              </Col>
            </Row>
            <Row className = 'show-grid'>
              <Col xs={2} md={2}>
                  <TrackerPad activeSensor = {this.props.activeSensor}
                              isConnected ={this.props.isConnected}
                              measureNumber={this.props.measureNumber}
                              toggleNumber={this.props.toggleNumber}
                              homeNumber={this.props.homeNumber}
                              compItNumber={this.props.compItNumber}
                              init={this.props.init}/>
              </Col>
              <Col xs={10} md={10}>
                  <TrackerOutput/>
              </Col>

            </Row>
          </Grid>
      </div>
    );
  }
}
