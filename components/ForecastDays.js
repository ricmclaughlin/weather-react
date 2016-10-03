var React = require('react');
var PropTypes = React.PropTypes;
var ForecastPanel = require('./ForecastPanel');

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

ForecastDays.propTypes = {
  forecast: PropTypes.array.isRequired
};

module.exports = ForecastDays;