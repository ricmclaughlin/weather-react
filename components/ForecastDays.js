import React, { PropTypes } from 'react'
import ForecastPanel from './ForecastPanel'

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

export default ForecastDays