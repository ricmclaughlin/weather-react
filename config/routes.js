import React from 'react'
import { Router, browserHistory, IndexRoute, Route } from 'react-router'
import Main from '../components/Main';
import FiveDayContainer from '../containers/FiveDayContainer'

export const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={FiveDayContainer} />
    </Route>
  </Router>
);
