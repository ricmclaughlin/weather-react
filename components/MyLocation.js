import React, { PropTypes } from 'react'
import transparentBg from '../styles'
import { Link } from 'react-router'
import { Location } from '../utils/Location'
import { Weather } from '../utils/Weather'
import ForecastDays from '../components/ForecastDays'
import GetLocation from '../components/GetLocation'

var MyLocation = React.createClass({
  getWeather: function(location) {
    Weather.getWeather(location)
      .then(data => {
        this.setState({
          isLoading: false,
          myForecast: data,
          myLocation: location,
          newLocation: ''
        });  
      });
  },

  handleUpdateLocation: function(e) {
    this.setState({
      newLocation: e.target.value.replace(/\b\w/g, function(l){ return l.toUpperCase() })
    })
  },

  handleSubmitLocation: function(e) {
    e.preventDefault();
    this.getWeather(this.state.newLocation);
  },

  getInitialState: function () {
    return {
      isLoading: true,
      newLocation: '',
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

