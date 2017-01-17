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
      <Grid>
        <Row>
        <Col xs={6} md={3}>
          <Thumbnail href="#/MeasurRefPlane" alt="Faro Tracker" src="./assets/thumbnail.png" />
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail href="#/MeasurRefPlane" alt="Virtueller Tracker" src="./assets/thumbnail.png" />
        </Col>
        </Row>
      </Grid>
    );
  }
}
