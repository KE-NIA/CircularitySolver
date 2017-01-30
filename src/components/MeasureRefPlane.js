import React from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Row, Col } from 'react-bootstrap'

const mapStateToProps = (state) => {
    return{
    };
};
const mapDispatchToProps = (dispatch) => {
    return{
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class MeasureRefPlane extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount(){
  }

  render() {
    const dummySentences = ['If You want to measure a Reference-Plane, you need 4 Points,Please Measure a point at the marked location'];

    let letterStyle = {
      padding: 10,
      margin: 10,
      backgroundColor: "#ffde00",
      color: "#333",
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: "32",
      textAlign: "center"
    };
    let buttonstyle = {
      paddingTop: 30,
      paddingBottom: 30,
      paddingLeft: 50,
      paddingRight: 50,
      borderRadius: 50.666667,
      backgroundColor: "#fbbd19",
      marginTop: 100,

    };
    return (
      <div>
        <h2>Bitte Messen Sie 4 Punkte</h2>
        <svg width={100} height={100}>
          <circle cx={50} cy={50} r={40} />
          <rect />
        </svg>
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={4} mdOffset={4}><br/>{ dummySentences.slice(0, 2).join(' ') }</Col>
          </Row>
        </Grid>
        <Button style={{ fontSize: '32px' }} class="btn btn-default central-button" href="#/measurerefplane">MESSEN</Button>
      </div>
    );
  }
}
