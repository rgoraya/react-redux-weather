import React from 'react'
import TimeUpdated from './time_updated';

const WeatherDescription = (props) => {
  return (
    <div>
      <h3 className="font-weight-light mb-0">
        {props.weatherData.weather[0].main}
      </h3>
      <p className="text-muted mb-0">{props.weatherData.weather[0].description}</p>
      <TimeUpdated timestamp={props.weatherData.dt} />
    </div>
  )
}

export default WeatherDescription