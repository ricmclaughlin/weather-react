module.exports = (function () {
  'use strict';
 
  function geoLocationService() {

    var location = {
      tempF: '90',
      tempC: '90',
      celsius: false,
      city: '',
      country: '',
      lat: '',
      long: '',
      weather: '',
      weatherData: '',
      weatherIcon: '',
      region: ''
    };

    var service = {
      location: location,
      getLocation: getLocation
    };

    return service;

    ////////////////////

    function getLocation(location) {
      return $http.get('http://ip-api.com/json')
        .success(function (coordinates) {
          location.city = coordinates.city;
          location.country = coordinates.country;
          location.countryCode = coordinates.countryCode;
          location.region = coordinates.region;
        });
    }
  }
})();
