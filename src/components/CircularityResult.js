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
      <div class=" circularity-result-justification" >
        <div class=" circularity-result">Circularity: 0.25 mm </div>
          <i style= {{ marginTop: '50px' }} class="fa fa-thumbs-o-up fa-5x"></i>
        <h2>You have successfully used my application,Thats great!</h2>
        <h3>It would be nice if you could rate my application <a href=" https://www.surveymonkey.de/r/53M9GCH">here!</a></h3>
        <h3>Wenn Sie die Applikation auf deutsch bewerten wollen, klicken Sie <a href="https://www.surveymonkey.de/r/5SR2QSL">hier!</a></h3>

      </div>
    );
  }
}
