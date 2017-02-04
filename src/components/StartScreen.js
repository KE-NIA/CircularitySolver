import React from 'react';
import { connect } from 'react-redux';
import {Grid, Row, Col, Thumbnail, Button, Modal} from 'react-bootstrap';

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
    this.state = {
      showModal: true,
    }

    this.onClickModal = this.onClickModal.bind(this);
  }

  componentDidMount(){
  }

  onClickModal() {
    this.setState(
      {
        showModal: false,
      }
    )
  }

  render() {

    const modalInstance = (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Welcome to my Prototype</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Please read my blog entry on <a href="https://medium.com/@KE_NIA/conception-and-development-of-an-assistance-software-for-lasertracker-based-circularity-measurement-159ab86fe00#.wc95ktr4c">medium</a>
          </Modal.Body>

          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.onClickModal}>Ok</Button>
          </Modal.Footer>

        </Modal.Dialog>
      </div>
    );

    return (
      <div>
        {this.state.showModal ? modalInstance : null}
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
      </div>
    );

  }
}
