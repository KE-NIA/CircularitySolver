import React from 'react';
import { connect } from 'react-redux';
import {Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
const mapStateToProps = (state) => {
    return{
    };
};
const mapDispatchToProps = (dispatch) => {
    return{
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class MeasureCircle extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }

  render() {
    return (
      <div>
        <h2>Ergebnis</h2>
        <Grid>
            <Row>
              <Col xs={6} md={4} lg={6}>
                <Thumbnail  alt="Faro Ion" src="./assets/result.jpg" />
                <p>Darstellung Rundheit</p>
              </Col>
              <Col>
              <p>Min</p>
              <p>Max</p>
              <p>arithmetic medium</p>
              <Button href="#/measurrefplane">Noch einmal Messen</Button>
              <Button href="#/startscreen">zurück zur Tracker Auswahl</Button>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}
