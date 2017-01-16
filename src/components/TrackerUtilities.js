import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setSensor } from '../actions/sensorActions';
import CheckBar from './CheckBar';
import SetSensor from './SetSensor';

const mapStateToProps = (state) => {
    return{
        activeSensor: state.sensor.activeSensor,
        sensorTypes: state.sensor.sensorTypes,
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
      if(this.props.isConnected =='true'){
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
                <CheckBar/>
              </Col>
            </Row>
          <Row className='show-grid' >
          <Col xs={2} md={2}>

          </Col>
            <Col xs={10} md={10}>
              <SetSensor />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
