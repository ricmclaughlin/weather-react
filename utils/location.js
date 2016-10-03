var Location = {
  getLocation: function () {
    var locationApiUrl = 'http://ip-api.com/json';
    var location = '';
    return fetch(locationApiUrl)
      .then(data => data.json())
      .then(json => {
        return location = json.city.replace(/\b\w/g, function(l){ return l.toUpperCase() })
      });
  }
};   
module.exports = Location;
