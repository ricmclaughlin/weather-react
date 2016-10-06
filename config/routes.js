import React from 'react'
import { Router, hashHistory, IndexRoute, Route } from 'react-router'
import Main from '../components/Main';
import MyLocation from "../components/MyLocation"

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={MyLocation} />
    </Route>
  </Router>
);

module.exports = routes;