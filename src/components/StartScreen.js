import React from 'react';
import { connect } from 'react-redux';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';

const mapStateToProps = (state) => {
    return{
    };
};
const mapDispatchToProps = (dispatch) => {
    return{
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class StartScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }

  render(){
    return (
      <Grid style={{marginTop: '74px'}}>
        <Row>
          <Col xs={4} md={4} lg={4}>
            <Button style={{height:'300px', width: '300px'}} href="#/measurerefplane">
              <img style={{height:'80%'}}  alt="Faro Ion" src="./assets/ion.png" />
              <p style={{fontSize: '24px'}}>Faro Ion</p>
            </Button>
          </Col>
          <Col xs={4} md={4} lg={4}>
            <Button style={{height:'300px', width: '300px'}} href="#/measurerefplane">
              <img style={{height:'80%'}}  alt="Faro Vantage" src="./assets/vantage.png" />
              <p style={{fontSize: '24px'}}>Faro Vantage</p>
            </Button>
          </Col>
          <Col xs={4} md={4} lg={4}>
            <Button style={{height:'300px', width: '300px'}} href="#/measurerefplane">
              <img style={{height:'80%'}}  alt="Simulated Laser Tracker" src="./assets/simulatedTracker.png" />
              <p style={{fontSize: '24px'}}>Simulated Laser Tracker</p>
            </Button>
          </Col>
        </Row>
      </Grid>
    );

  }
}
