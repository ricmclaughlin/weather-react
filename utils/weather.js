(function () {
  'use strict';
  function weatherService($http, WEATHER_KEY) {
    var service = {
      getWeather: getWeather
    };

    return service;

    ////////////////////

    function getWeather(location) {
      return $http.get('http://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + location.city + ',' + location.countryCode + '&APPID=' + WEATHER_KEY)
        .success(function (weatherData) {
          location.weatherData = weatherData;
          location.weatherIcon = 'http://openweathermap.org/img/w/' + weatherData['weather'][0].icon + '.png';
          location.weather = weatherData['weather'][0].main;
          location.tempC = weatherData['main'].temp;
          location.tempF = (location.tempC * (9 / 5)) + 32;
        });
    }
  }
})();