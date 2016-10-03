var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Location = require('../utils/Location');
var Weather = require('../utils/Weather');
var ForecastDays = require('../components/ForecastDays');
var GetLocation = require('../components/GetLocation');

var MyLocation = React.createClass({
  getWeather: function(location) {
    Weather.getWeather(location)
      .then(data => {
        this.setState({
          isLoading: false,
          myLocation: location,
          myForecast: data
        });  
      });
  },

  handleUpdateLocation: function(e) {
    this.setState({
      myLocation: e.target.value
    })
  },

  handleSubmitLocation: function(e) {
    e.preventDefault();
    this.getWeather(this.state.myLocation);
  },

  getInitialState: function () {
    return {
      isLoading: true,
      myLocation: '',
      myForecast: []
    }
  },

  componentDidMount: function () {
    Location.getLocation().then(location => this.getWeather(location))
  },

  render: function() {
    return (
      <div className="container text-center" style={transparentBg}>
        <GetLocation 
          myLocation={this.state.myLocation}
          header={this.state.myLocation} 
          onSubmitLocation={this.handleSubmitLocation} 
          onUpdateLocation={this.handleUpdateLocation}
          />
        <ForecastDays forecast={this.state.myForecast}/>
      </div>
    )
  }
});

module.exports = MyLocation;

