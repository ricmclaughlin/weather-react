import React, { PropTypes } from 'react';

function GetLocation(props) {
  return (
    <div id="form-row" className="row">
      <div className="col-md-9">
        <h1>The five day forecast for {props.header}</h1>
      </div>
      <div className="col-md-3">      
        <form onSubmit={props.onSubmitLocation}>
          <div className="form-group">
            <input 
              type="text"
              className="form-control"
              value={props.newLocation}
              onChange={props.onUpdateLocation}
            />
            <button 
              className="btn btn-block btn-success" 
              type="submit">
              Get Forecast
            </button>
          </div>
        </form>
      </div>      
    </div>
  );
}

GetLocation.propTypes = {
  header: PropTypes.string.isRequired,
  myLocation: PropTypes.string.isRequired,
  onSubmitLocation: PropTypes.func.isRequired,
  onUpdateLocation: PropTypes.func.isRequired
};
export default GetLocation