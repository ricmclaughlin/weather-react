var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Location = require('../utils/Location');
var Weather = require('../utils/Weather');

function ForecastDays(props){
  return (
    <div id="weather-data" className="row">
      {
        props.forecast.map(function (forecastDay, index) {
          return (
            <ForecastPanel key={index} forecastDay={forecastDay} />
          )
        })
      }
    </div>
  );
}

function GetLocation(props) {
  return (
    <div id="form-row" className="row">
      <div className="col-md-12">
      <form onSubmit={props.onSubmitLocation}>
        <h1>The five day forecast for {props.header}</h1>
        <input 
          type="text"
          className="form-control"
          value={props.myLocation}
          onChange={props.onUpdateLocation}
        />
        <button 
          className="btn btn-block btn-success" 
          type="submit">
          Get Forecast
        </button>
      </form>
      </div>
    </div>
  );
}

function ForecastPanel (props){
  return (
    <div key={props.index} className="col-md-2">
      <div className="panel panel-default">
        <div className="panel-heading"><img src={props.forecastDay.forecastIcon} alt={props.forecastDay.forecastText}/></div>
        <div className="panel-body">{props.forecastDay.dayOfWeek}</div>
        <div className="panel-body">Forecast: {props.forecastDay.forecastText}</div>
        <div className="panel-body">High: {props.forecastDay.high}</div>
        <div className="panel-body">Low: {props.forecastDay.low}</div>
      </div>
    </div>
  );
}

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

