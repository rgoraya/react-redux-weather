import React from 'react'
import FormattedTime from './formatted_time'

const OtherStats = (props) => {
  return (
    <p className="text-muted text-center mb-0">
      <span className="oi oi-timer mr-2"></span>{props.weatherData.main.pressure}kPa 
      <span className="oi oi-droplet mr-2 ml-2"></span>{props.weatherData.main.humidity}% 
      <span className="oi oi-sun mr-2 ml-2"></span><FormattedTime timestamp={props.weatherData.sys.sunrise} /> 
      <span className="oi oi-star mr-2 ml-2"></span><FormattedTime timestamp={props.weatherData.sys.sunset} />
    </p>
  )
}

export default OtherStats