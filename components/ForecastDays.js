import React, { PropTypes } from 'react'
import ForecastPanel from './ForecastPanel'

export default function ForecastDays({forecast}){
  return (
    <div id="weather-data" className="row">
      {
        forecast.map(function (forecastDay, index) {
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
