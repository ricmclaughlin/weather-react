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
      <div className="container text-center" style={transparentBg}>
        <div id="form-row" className="row">
          <div className="col-md-4">
          
          </div>
          <div className="col-md-4">
            <h1>The five day forecast for Seattle:</h1>
          </div>
          <div className="col-md-4">
            <form>
              <div className="form-group">
                <label for="email">Email address:</label>
                <input className="form-control" id="email" />
              </div>
            </form>
          </div>
        </div>
        
        <div id="weather-data" className="row">
          <div className="col-md-2 col-md-offset-1">
          
            <div className="panel panel-default">
              <div className="panel-heading">Panel Heading</div>
              <div className="panel-body">Panel Content</div>
            </div>
          </div>
          <div className="col-md-2">
          
            <div className="panel panel-default">
              <div className="panel-heading">Panel Heading</div>
              <div className="panel-body">Panel Content</div>
            </div>
          </div>
          <div className="col-md-2">
          
            <div className="panel panel-default">
              <div className="panel-heading">Panel Heading</div>
              <div className="panel-body">Panel Content</div>
            </div>
          </div>
          <div className="col-md-2">
          
            <div className="panel panel-default">
              <div className="panel-heading">Panel Heading</div>
              <div className="panel-body">Panel Content</div>
            </div>
          </div>
          <div className="col-md-2">
          
            <div className="panel panel-default">
              <div className="panel-heading">Panel Heading</div>
              <div className="panel-body">Panel Content</div>
            </div>
          </div>
        </div>

      </div>
    )
  }
});

module.exports = MyLocation;

