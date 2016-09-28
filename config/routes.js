var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var ByLocation = require("../components/ByLocation");
var MyLocation = require("../components/MyLocation");

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={MyLocation} />
      <Route path='bylocation' component={ByLocation} />
    </Route>
  </Router>
);

module.exports = routes;