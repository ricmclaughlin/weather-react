import React, { PropTypes } from 'react';

export default function GetLocation(props) {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <p className="navbar-brand">The five day forecast for {props.header}</p>
        </div>
        <form className="navbar-form navbar-right" role="search" onSubmit={props.onSubmitLocation}>
          <div className="form-group">
            <input 
                type="text"
                className="form-control"
                placeholder="Different Location?"
                value={props.newLocation}
                onChange={props.onUpdateLocation}
              />
          </div> 
          <button type="submit" className="btn btn-default">Get Forecast</button>
          
        </form>
      </div>
    </nav>
  );
}

GetLocation.propTypes = {
  header: PropTypes.string.isRequired,
  newLocation: PropTypes.string.isRequired,
  onSubmitLocation: PropTypes.func.isRequired,
  onUpdateLocation: PropTypes.func.isRequired
};
