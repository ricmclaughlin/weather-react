var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ByLocation = React.createClass({
  render: function() {
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>Weather By Location</h1>
        <p className="lead">Some Fancy Motto</p>
        <Link to="/">
          <button className="btn btn-lg btn-success" type="button">Pick Location</button>
        </Link>
       
      </div>
    )
  }
});

module.exports = ByLocation;