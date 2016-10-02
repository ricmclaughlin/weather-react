var Location = {
  getLocation: function () {
    var locationApiUrl = 'http://ip-api.com/json';
    var location = {
      
      city: 'Seattle',

    };
    return location;
  }
};   
    ////////////////////
    

      // return $http.get()
      //   .success(function (coordinates) {
      //     location.city = coordinates.city;
      //     location.country = coordinates.country;
      //     location.countryCode = coordinates.countryCode;
      //     location.region = coordinates.region;
      //   });
// var location = {
//   tempF: '90',
//   tempC: '90',
//   celsius: false,
//   city: 'Seattle',
//   country: 'USA',
//   lat: '',
//   long: '',
//   weather: '',
//   weatherData: '',
//   weatherIcon: '',
//   region: ''
// };
module.exports = Location;
