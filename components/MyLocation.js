var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Location = require('../utils/Location');
var Weather = require('../utils/Weather');

function ForecastDays(props){
  return (
     
      <div id="weather-data" className="row">
        {props.forecast.map(function (forecastDay, index) {
          return (
            <div key={index} className="col-md-2">
              <div className="panel panel-default">
                <div className="panel-heading"><img src={forecastDay.forecastIcon} alt={forecastDay.forecastText}/></div>
                <div className="panel-body">{forecastDay.dayOfWeek}</div>
                <div className="panel-body">Forecast: {forecastDay.forecastText}</div>
                <div className="panel-body">High: {forecastDay.high}</div>
                <div className="panel-body">Low: {forecastDay.low}</div>
              </div>
            </div>
            )
          })
        }
      </div>
  );
}

var MyLocation = React.createClass({

  getInitialState: function () {
    return {
      isLoading: true,
      myLocation: {},
      myForecast: []
    }
  },
  componentDidMount: function () {
    var location = "Seattle";
    Weather.getWeather(location).then(data => {
      this.setState({
        isLoading: false,
        myLocation: location,
        myForecast: data
      });  
    });
  },
  render: function() {
    return (
      <div className="container text-center" style={transparentBg}>
        <div id="form-row" className="row">
          <div className="col-md-12">
            <h1>The five day forecast for <input className="form-control" id="city" /></h1>
          </div>
        </div>
      <ForecastDays forecast={this.state.myForecast}/>

      </div>
    )
  }
});

module.exports = MyLocation;

