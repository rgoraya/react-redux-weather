import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/owfont-regular.min.css';

import Temperature from '../components/temperature'
import WeatherDescription from '../components/weather_description'
import CityBanner from '../components/city_banner'
import OtherStats from '../components/other_stats'

class WeatherDetails extends Component {
  render() {
    let weatherData = this.props.weatherData;
    if (weatherData.length === 0) {
      return (
        <div className="card-body text-center text-light">
          <CityBanner />
        </div>
      )
    } else {      
      return (
        <div className="card-body text-light p-0">
          <CityBanner weatherData={weatherData} />
          <Temperature weatherData={weatherData} />
          <WeatherDescription weatherData={weatherData} />
          <OtherStats weatherData={weatherData}/>
        </div>
      ) 
    }
  }
}

function mapStateToProps(state) {
  return { weatherData: state.weatherForCity }
}

export default connect(mapStateToProps)(WeatherDetails)