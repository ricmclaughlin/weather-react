import React, { PropTypes } from 'react'

export default function ForecastPanel ({index, forecastDay}) {
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
  );
}

ForecastPanel.propTypes = {
  forecastDay: PropTypes.shape({
    dayOfWeek: PropTypes.string.isRequired,
    high: PropTypes.number.isRequired,
    forecastIcon: PropTypes.string.isRequired,
    forecastText: PropTypes.string.isRequired,
    low: PropTypes.number.isRequired
  })
};
