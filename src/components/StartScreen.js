import React from 'react';
import { connect } from 'react-redux';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';

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

  render() {
    return (
      <div >
        <div style={{margin:'5%'}}>
        <h1>Lets beginn</h1>
        <h2>Please choose a Laser Tracker</h2>
        </div>
        <Grid>
          <Row>
            <Col xs={6} md={4} lg={4}>
              <Thumbnail href="#/MeasurRefPlane" alt="Faro Ion" src="./assets/Faroxi.jpg" />
              <p>Faro Xi</p>
          </Col>
          <Col xs={6} md={4} lg={4}>
            <Thumbnail href="#/MeasurRefPlane" alt="Faro Vantage" src="./assets/Vantage.jpg" />
            <p>Faro Vantage</p>
          </Col>
            <Col xs={6} md={4} lg={4}>
              <Thumbnail href="#/MeasurRefPlane" alt="Virtueller Tracker" src="./assets/thumbnail.png" />
            <p>virtueller Lasertracker</p>
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}
