import React from 'react'
import GooglePlacesImage from './google_places_image';
import TimeUpdated from './time_updated';

const CityBanner = (props) => {
  return(
    <div id="cityBanner" className="position-relative">
      {props.weatherData ? (
        <div>
          <div id="darkener" className="w-100 h-50 position-absolute"></div>
          <div id="cityTitle" className="p-3 position-absolute">
            <h6 className="mb-0">{props.weatherData.name}, {props.weatherData.sys.country}.</h6>
            <TimeUpdated timestamp={props.weatherData.dt} />
          </div>
          <GooglePlacesImage weatherData={props.weatherData}/>
        </div>
      ) : (
        null
      )}

    </div>
  );
}

export default CityBanner