import React from 'react'
import { Router, hashHistory, IndexRoute, Route } from 'react-router'
import Main from '../components/Main';
import FiveDayContainer from '../containers/FiveDayContainer'
import SingleDayContainer from '../containers/SingleDayContainer'

export const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={FiveDayContainer} />
      <Route path='singleDay' component={SingleDayContainer} />
    </Route>
  </Router>
);
