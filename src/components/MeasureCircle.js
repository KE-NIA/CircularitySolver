import React from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Row, Col } from 'react-bootstrap'
import CircleSvg from './CircleSvg';

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
    const dummySentences = ['Um den Kreis zu messen führen sie die Kugel bitte enlang des Kreises'];

    return (
      <div style={{marginTop: '74px'}}>
        <h2>Bitte führen Sie die Kugel entlang des Umrings</h2>
        <CircleSvg showFlangePoints={false} />
        <Grid>
          <Row className="show-grid" class="text-center">
            <Col sm={6} md={4} mdOffset={4}><br/>{dummySentences.slice(0, 2).join(' ')}</Col>
          </Row>
        </Grid>
        <Button href="#/circularityresult">Messen</Button>
      </div>
    );
  }
}
