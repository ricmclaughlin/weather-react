import React, { PropTypes } from 'react'
import ForecastPanel from './ForecastPanel'

export default function ForecastDays({forecast}){
  const listMode = true;
  return (
    <div id="weather-data" className="row">
      {
        forecast.map(function (forecastDay, index) {
          return (
            <ForecastPanel key={index} forecastDay={forecastDay} listMode={listMode}/>
          )
        })
      }
    </div>
  );
}

ForecastDays.propTypes = {
  forecast: PropTypes.array.isRequired
};
