import React, { PropTypes } from 'react'

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

ForecastPanel.propTypes = {
  forecastDay: PropTypes.shape({
    dayOfWeek: PropTypes.string.isRequired,
    high: PropTypes.number.isRequired,
    forecastIcon: PropTypes.string.isRequired,
    forecastText: PropTypes.string.isRequired,
    low: PropTypes.number.isRequired
  })
};

export default ForecastPanel