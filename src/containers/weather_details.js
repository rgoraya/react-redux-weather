import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/owfont-regular.min.css';

import Temperature from '../components/temperature'
import WeatherDescription from '../components/weather_description'
import GoogleMap from '../components/google_map'
import OtherStats from '../components/other_stats'

class WeatherDetails extends Component {
  render() {
    let weatherData = this.props.weatherData;
    if (weatherData.length === 0) {
      return (
        <div className="card-body text-center text-light">
          Please search for a city to see its weather
        </div>
      )
    } else {      
      return (
        <div>
          <div className="card-body text-light">
            <h2 className="font-weight-light text-right">{weatherData.name}</h2>
            <div className="row">
              <div className="col-sm-6 mt-4">
                <WeatherDescription weatherData={weatherData} />
                <Temperature weatherData={weatherData} />
              </div>
              <div className="col-sm-6 mt-4">
                <GoogleMap coord={weatherData.coord}/>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <OtherStats weatherData={weatherData}/>
          </div>
        </div>
      ) 
    }
  }
}

function mapStateToProps(state) {
  return { weatherData: state.weatherForCity }
}

export default connect(mapStateToProps)(WeatherDetails)