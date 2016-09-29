var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Location = require('../utils/Location');
var Weather = require('../utils/Weather');

var MyLocation = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      myLocation: {}
    }
  },
  componentDidMount: function () {
    var location = Location.getLocation();
    location = Weather.getWeather(location);
    console.log(location);
    this.setState({
      isLoading: false,
      myLocation: location
    })
  },
  render: function() {
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>Weather Based on Your Location</h1>
        <p className="lead">Some Fancy Motto</p>
        <Link to="/bylocation">
          <button className="btn btn-lg btn-success" type="button">Pick Location</button>
        </Link>
      </div>
    )
  }
});

module.exports = MyLocation;