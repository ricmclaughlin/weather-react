var Weather = {
  forecast: {"city":{"id":5809844,"name":"Seattle","coord":{"lon":-122.332069,"lat":47.606209},"country":"US","population":0},"cod":"200","message":0.333,"cnt":5,"list":[{"dt":1475434800,"temp":{"day":49.1,"min":44.08,"max":55.71,"night":45.99,"eve":53.91,"morn":44.55},"pressure":966.65,"humidity":93,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":2.62,"deg":41,"clouds":76,"rain":2.46},{"dt":1475521200,"temp":{"day":49.33,"min":40.6,"max":52.63,"night":40.6,"eve":51.76,"morn":43.5},"pressure":967.18,"humidity":92,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":1.92,"deg":133,"clouds":12,"rain":0.26},{"dt":1475607600,"temp":{"day":52.86,"min":47.53,"max":52.95,"night":50.86,"eve":52.95,"morn":47.53},"pressure":969.41,"humidity":0,"weather":[{"id":502,"main":"Rain","description":"heavy intensity rain","icon":"10d"}],"speed":4.32,"deg":143,"clouds":71,"rain":16.36},{"dt":1475694000,"temp":{"day":52.7,"min":49.35,"max":54.21,"night":49.35,"eve":54.21,"morn":50.32},"pressure":975.52,"humidity":0,"weather":[{"id":502,"main":"Rain","description":"heavy intensity rain","icon":"10d"}],"speed":4.47,"deg":181,"clouds":35,"rain":21.99},{"dt":1475780400,"temp":{"day":49.57,"min":46.65,"max":51.75,"night":50.09,"eve":51.75,"morn":46.65},"pressure":970.62,"humidity":0,"weather":[{"id":502,"main":"Rain","description":"heavy intensity rain","icon":"10d"}],"speed":2.35,"deg":100,"clouds":99,"rain":15.1}]},
  apiKey: 'ced22edda5ab59a89469af8a36ce60af',

  createForecasts: function(forecast) {
    return forecast.map(function(day) {
      var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var theForecast = {};
      theForecast.dayOfWeek = weekDay[new Date(day.dt * 1000).getDay()];
      theForecast.forecastText = day.weather[0].description.replace(/\b\w/g, function(l){ return l.toUpperCase() });
      theForecast.forecastIcon = 'http://openweathermap.org/img/w/' + day.weather[0].icon + '.png';
      theForecast.high = Math.round(day.temp.max);
      theForecast.low = Math.round(day.temp.min);
      return theForecast;
    });   
  },
  
  getWeather: function(location) {
    var fiveDayForecastURL = `http://api.openweathermap.org/data/2.5/forecast/daily?type=accurate&cnt=5&APPID=${this.apiKey}&q=${location}&units=imperial`;
    console.log(location);
    return fetch(fiveDayForecastURL)
      .then(data => data.json())
      .then(json => this.createForecasts(json.list));
  }
};

module.exports = Weather;



