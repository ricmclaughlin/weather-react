var React = require('react');
var Link = require('react-router').Link;

var PickLocationContainer = React.createClass({
  render: function () {
    return (
      <div>
        <h1>This is where you pick your location</h1>

        <Link to="/">
          <button className="btn btn-lg btn-success" type="button">WeatherForMyLocation</button>
        </Link>

      </div>
    )
  }
});

module.exports = PickLocationContainer;