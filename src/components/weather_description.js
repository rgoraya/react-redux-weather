import React from 'react'

const WeatherDescription = (props) => {
  return (
    <div id="weatherDescription" className="text-center pb-4">
      <h2 className="font-weight-light mb-0">
        <i className={`mr-2 align-middle owf owf-${props.weatherData.weather[0].id}`}></i>
        {props.weatherData.weather[0].main}
      </h2>
      <p className="text-muted mb-0">{props.weatherData.weather[0].description}</p>
    </div>
  )
}

export default WeatherDescription