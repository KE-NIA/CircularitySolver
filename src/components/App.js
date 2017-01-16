import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import TrackerUtilities from './TrackerUtilities';
import TrackerNavBar from './TrackerNavBar';


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
          <IndexRoute component={TrackerUtilities} />
          <Route path="/trackerutilities" component={TrackerUtilities} />
        </Route>
      </Router>
    );
  }
}
