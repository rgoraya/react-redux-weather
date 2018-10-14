import React from 'react'
import FormattedTime from './formatted_time'

const OtherStats = (props) => {
  return (
    <div id="statsGradient" className="p-4">
      <table id="statsTable" className="table table-sm mb-0">
        <tbody>
          <tr>
            <th scope="row"><span className="oi oi-timer"></span></th>
            <td>Pressure</td>
            <td className="text-right">{props.weatherData.main.pressure}kPa</td>
          </tr>
          <tr>
            <th scope="row"><span className="oi oi-droplet"></span></th>
            <td>Humidity</td>
            <td className="text-right">{props.weatherData.main.humidity}%</td>
          </tr>
          <tr>
            <th scope="row"><span className="oi oi-sun"></span></th>
            <td>Sunrise</td>
            <td className="text-right"><FormattedTime timestamp={props.weatherData.sys.sunrise} /> </td>
          </tr>
          <tr>
            <th scope="row"><span className="oi oi-star"></span></th>
            <td>Sunset</td>
            <td className="text-right"><FormattedTime timestamp={props.weatherData.sys.sunset} /> </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OtherStats