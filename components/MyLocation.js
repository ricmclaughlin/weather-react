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
      celsius: false,
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
        <h1>Hello fair citizen of {this.state.myLocation.city}, {this.state.myLocation.region}</h1>
        <p>Your current temperature is {this.state.myLocation.tempF}</p>
        <p>and it is <img src={this.state.myLocation.weatherIcon} alt="" /> ({this.state.myLocation.weather}) outside!</p>

      </div>
    )
  }
});

module.exports = MyLocation;

// <div class="jumbotron text-center">
    
//   </div>


// //   <h1>Weather Based on Your Location</h1>
// // <p className="lead">Some Fancy Motto</p>
// // <Link to="/bylocation">
// //   <button className="btn btn-lg btn-success" type="button">Pick Location</button>
// // </Link>