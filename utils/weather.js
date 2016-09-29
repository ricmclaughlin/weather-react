var Weather = {
  getWeather: function(location) {
    
    location.weatherIcon = 'http://openweathermap.org/img/w/10n.png';
    location.weather = 'rain';
    location.tempC = 20;
    location.tempF = (location.tempC * (9 / 5)) + 32;
    return location;
  }
};

module.exports = Weather;
// function getWeather(location) {
//   return $http.get('http://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + location.city + ',' + location.countryCode + '&APPID=' + WEATHER_KEY)
//     .success(function (weatherData) {
//       location.weatherData = weatherData;
//       location.weatherIcon = 'http://openweathermap.org/img/w/' + weatherData['weather'][0].icon + '.png';
//       location.weather = weatherData['weather'][0].main;
//       location.tempC = weatherData['main'].temp;
//       location.tempF = (location.tempC * (9 / 5)) + 32;

// var location = {
//   tempF: '90',
//   tempC: '90',
//   celsius: false,
//   city: 'Seattle',
//   country: 'USA',
//   lat: '47.6026',
//   long: '-122.3284',
//   weather: '',
//   weatherData: '',
//   weatherIcon: '',
//   region: 'WA'
// };