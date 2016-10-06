import React, { PropTypes, Component } from 'react'
import transparentBg from '../styles'
import { Link } from 'react-router'
import Location from '../utils/Location'
import Weather from '../utils/Weather'
import ForecastDays from '../components/ForecastDays'
import GetLocation from '../components/GetLocation'
import Loading from '../components/Loading'
import Footer from '../components/Footer'

class MyLocation extends Component{
  constructor() {
    super()
    this.state = {
      isLoading: true,
      newLocation: '',
      myLocation: '',
      myForecast: []
    }
  }

  getWeather(location) {
    Weather.getWeather(location)
      .then(data => {
        this.setState({
          isLoading: false,
          myForecast: data,
          myLocation: location,
          newLocation: ''
        });  
      });
  }

  handleUpdateLocation(e) {
    this.setState({
      newLocation: e.target.value.replace(/\b\w/g, function(l){ return l.toUpperCase() })
    })
  }

  handleSubmitLocation(e) {
    e.preventDefault();
    this.getWeather(this.state.newLocation);
  }

  componentDidMount() {
    Location.getLocation().then(location => this.getWeather(location))
  }

  render() { 
    return (
      (this.state.isLoading === true) ? 
        <Loading />: 
        <div className="container text-center" style={transparentBg}>
          <GetLocation 
            myLocation={this.state.myLocation}
            header={this.state.myLocation} 
            onSubmitLocation={(event) => this.handleSubmitLocation(event)} 
            onUpdateLocation={(event) => this.handleUpdateLocation(event)}
            />
          <ForecastDays forecast={this.state.myForecast}/>
          <Footer />
        </div>
    )
  }
}

export default MyLocation
