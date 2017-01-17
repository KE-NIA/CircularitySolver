'use strict';

import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import StartScreen from './StartScreen';
import TrackerNavBar from './TrackerNavBar';
import MeasureRefPlane from './MeasureRefPlane';


export default class App extends React.Component {
    constructor(props) {
      super(props);
/**
*Creates a router and sets the single paths for the single components
*it also sets the history route
*the index route sets the component which will shown, if the html page opens
*/
    }
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={TrackerNavBar}>
          <IndexRoute component={StartScreen} />
          <Route path="/startscreen" component={StartScreen} />
          <Route path="/measurrefplane" component={MeasureRefPlane} />
        </Route>
      </Router>
    );
  }
}
